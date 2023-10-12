import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(10).max(72).warning(`A title shouldn't exceed 72 characters.`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule post where you show them',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
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
      title: 'Figure',
      type: 'figure',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hasTicket',
      title: 'Has ticket button?',
      type: 'boolean',
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url',
      description: 'Use a valid URL. e.g.: https://eventbrite.com/event-url',
      hidden: ({document}) => !document?.hasTicket,
    }),
    defineField({
      name: 'hasEvent',
      title: 'Has event post?',
      type: 'boolean',
    }),
    defineField({
      name: 'eventReference',
      title: 'Event reference',
      type: 'eventDocument',
      description: 'Use only the event slug e.g.: polyrhythmics-reno-2023',
      hidden: ({document}) => !document?.hasEvent,
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
      publishedAt: 'publishedAt',
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
