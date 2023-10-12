import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {dashboardTool} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {MdArticle, MdCategory, MdSettings, MdLibraryMusic, MdVideogameAsset} from 'react-icons/md'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {schemaTypes} from './schemas'

// Define the actions that should be available for singleton documents
// const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
// const singletonTypes = new Set(['person', 'postCategory', 'post', 'event', 'experience'])

export default defineConfig({
  name: 'default',
  title: 'freshbakin',

  projectId: 'r6reilsl',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Website Deployments',
          sites: [
            {
              title: 'FreshBakin.com',
              apiId: '5697a8c2-8ee0-4ec9-98cf-9222e540c319',
              buildHookId: '611acf1eabf1242664243d88',
              name: 'freshbakin',
              url: 'https://freshbakin.com',
            },
          ],
        }),
      ],
    }),
    deskTool({
      structure: (S) =>
        S.list()
          .title("Fresh Bakin' Content")
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')
              )
              .icon(MdSettings),

            S.listItem()
              .title('Authors')
              .schemaType('person')
              .child(S.documentTypeList('person').title('People')),

            S.listItem()
              .title('Events')
              .schemaType('event')
              .child(S.documentTypeList('event').title('Events'))
              .icon(MdLibraryMusic),

            S.listItem()
              .title('Experiential')
              .schemaType('experience')
              .child(S.documentTypeList('experience').title('Experiential'))
              .icon(MdVideogameAsset),

            S.listItem()
              .title('Blog')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog posts'))
              .icon(MdLibraryMusic),

            S.listItem()
              .title('Post Categories')
              .schemaType('postCategory')
              .child(S.documentTypeList('postCategory').title('Post Category'))
              .icon(MdCategory),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    // templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  // document: {
  //   // For singleton types, filter out actions that are not explicitly included
  //   // in the `singletonActions` list defined above
  //   actions: (input, context) =>
  //     singletonTypes.has(context.schemaType)
  //       ? input.filter(({action}) => action && singletonActions.has(action))
  //       : input,
  // },
})
