import { MdPerson } from 'react-icons/md'

export default {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  icon: MdPerson,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'isKeynote',
      title: 'Keynote Speaker?',
      type: 'boolean'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string'
    },
    {
      name: 'topic',
      title: 'Topic',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'figure',
      title: 'Figure',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockText'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'figure'
    }
  }
}
