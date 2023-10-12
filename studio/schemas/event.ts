import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(2).max(72).warning("A title shouldn't exceed 72 characters."),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub-title',
      type: 'string',
      description: 'Tour name, set length, etc.',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      description: 'e.g.: 18+ | 21+ | all ages',
    }),
    defineField({
      name: 'startDate',
      title: 'Date',
      type: 'datetime',
      description: 'Date of the event.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Event name + city + year — e.g.: EVENT-RENO-OCTOBER-2022',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url',
      description: 'Use a valid URL. e.g.: https://freshbakin.com',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      description: 'Use abbreviation. e.g.: nv',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'postCategory'}}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'tag',
        },
      ],
    }),
    defineField({
      name: 'figure',
      title: 'Poster',
      type: 'figure',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'},
        {field: 'title', direction: 'asc'},
      ],
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'},
        {field: 'title', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'startDate',
      image: 'figure',
    },
    prepare({title = 'No title', publishedAt, image}) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image,
      }
    },
  },
})
