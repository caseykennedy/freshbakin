// gatsby-node.js

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Event Post Pages
// ___________________________________________________________________
async function createEventPostPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  const EventTemplate = require.resolve('./src/templates/Post/Event/index.tsx')

  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityEvent(sort: { order: DESC, fields: startDate }) {
        nodes {
          _rawExcerpt
          _rawInfo
          address
          ageGroup
          category {
            title
          }
          city
          figure {
            alt
            asset {
              gatsbyImageData(
                fit: FILLMAX
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, AVIF, WEBP]
              )
              url
            }
            caption
          }
          slug {
            current
          }
          startDate
          state
          subTitle
          tags {
            tag
          }
          ticketUrl
          title
          venue
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors
  // Let‘s gracefully handle if allSanityCatgogy is null
  const postNodes = (result.data.allSanityEvent || {}).nodes || []

  postNodes
    // Loop through the category nodes, but don't return anything
    .forEach((node) => {
      // Desctructure the id and slug fields for each category
      const { id, figure, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return
      if (!figure.asset) return
      // Make the URL with the current slug
      const path = `/events/${slug.current}`
      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: EventTemplate,
        context: {
          event: node,
        },
      })
    })
}

// News Post Pages
// ___________________________________________________________________
async function createNewsPostPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  const PostTemplate = require.resolve('./src/templates/Post/Article/index.tsx')

  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        nodes {
          title
          _rawExcerpt
          _rawBody
          _id
          publishedAt(formatString: "MMM. DD, YYYY | hh:mma")
          slug {
            current
          }
          tags {
            tag
          }
          figure {
            alt
            asset {
              gatsbyImageData(
                fit: FILLMAX
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, AVIF, WEBP]
              )
              url
            }
            caption
          }
          categories {
            title
          }
          authors {
            name
            role
          }
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors
  // Let‘s gracefully handle if allSanityCatgogy is null
  const postNodes = (result.data.allSanityPost || {}).nodes || []

  postNodes
    // Loop through the category nodes, but don't return anything
    .forEach((node) => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return
      // Make the URL with the current slug
      const path = `/news/${slug.current}`
      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: PostTemplate,
        context: {
          post: node,
        },
      })
    })
}

// Create Pages
// ___________________________________________________________________
exports.createPages = async ({ graphql, actions }) => {
  await createEventPostPages(graphql, actions)
  await createNewsPostPages(graphql, actions)
}
