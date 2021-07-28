import S from '@sanity/desk-tool/structure-builder'
import { MdStop, MdSettings } from 'react-icons/md'
import { GoFile } from 'react-icons/go'

export default () =>
  S.list()
    .title('dotNFT Content')
    .items([
      // Settings
      // _________________________________________________________________
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),

      // Post Category
      // _________________________________________________________________

      S.listItem()
        .title('Post Categories')
        .schemaType('postCategory')
        .child(S.documentTypeList('postCategory').title('Post Category'))

        .icon(MdStop),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post'))

        .icon(GoFile)

      // End
      // _________________________________________________________________
    ])
