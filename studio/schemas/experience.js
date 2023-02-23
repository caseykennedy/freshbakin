export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Name',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .min(10)
          .max(72)
          .warning("A title shouldn't exceed 72 characters.")
    },
    {
      name: 'subTitle',
      title: 'Sub-title',
      type: 'string',
      description: 'Catchy tagline for the event',
      validation: Rule => Rule.required()
    },
    {
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      description: 'e.g.: 18+ | 21+ | all ages'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Event name + city + year — e.g.: EVENT-RENO-OCTOBER-2022',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'postCategory' } }],
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'tag'
        }
      ]
    },
    {
      name: 'figure',
      title: 'Cover',
      type: 'figure',
      validation: Rule => Rule.required()
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'figure',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
      validation: Rule => Rule.required()
    },
    {
      name: 'info',
      title: 'Info',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'e.g.: info@freshbakin.com',
      validation: Rule => Rule.required()
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'string',
      description: 'thegreatbingorevival.com (no http:// or www)'
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'string',
      description: 'instagram.com/bingo (no http:// or www)'
    },
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'string',
      description: 'facebook.com/bingo (no http:// or www)'
    }
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [
        { field: 'publishedAt', direction: 'asc' },
        { field: 'title', direction: 'asc' }
      ]
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' },
        { field: 'title', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'startDate',
      image: 'figure'
    },
    prepare ({ title = 'No title', image }) {
      return {
        title,
        media: image
      }
    }
  }
}
