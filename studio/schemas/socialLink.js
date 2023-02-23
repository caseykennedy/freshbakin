import { MdLink } from 'react-icons/md'

export default {
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  icon: MdLink,
  liveEdit: false,
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description:
        'Please use the full URL e.g.: http://www.thegreatbingorevival.com'
    }
  ],
  preview: {
    select: {
      title: 'label'
    }
  }
}
