import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'eventDocument',
  type: 'document',
  fields: [
    defineField({
      title: 'Event',
      name: 'event',
      type: 'reference',
      weak: true,
      to: [{type: 'event'}],
    }),
  ],
})
