export default {
  name: 'figure',
  title: 'Figure',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }
  ]
}
