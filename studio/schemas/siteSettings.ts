import {defineField, defineType} from 'sanity'
import {MdSettings} from 'react-icons/md'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: MdSettings,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'titleAlt',
      title: 'Title Alternate',
      type: 'string',
    }),
    defineField({
      name: 'titleShort',
      title: 'Title Short',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'figure',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'userTwitter',
      title: 'Twitter Username',
      type: 'string',
    }),
    defineField({
      name: 'ogSiteName',
      title: 'Facebook Site Name',
      type: 'string',
    }),
    defineField({
      name: 'ogLanguage',
      title: 'og:language',
      type: 'string',
    }),
    defineField({
      name: 'googleTagID',
      title: 'Google Tag ID',
      type: 'string',
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
    }),
  ],
})
