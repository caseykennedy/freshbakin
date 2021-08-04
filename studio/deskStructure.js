import S from '@sanity/desk-tool/structure-builder'
import { MdStop, MdSettings, MdLibraryMusic } from 'react-icons/md'
import { GoFile } from 'react-icons/go'

export default () =>
  S.list()
    .title("Fresh Bakin' Content")
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

      // People
      // _________________________________________________________________

      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),

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

        .icon(GoFile),

      // Event
      // _________________________________________________________________

      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events'))

        .icon(MdLibraryMusic)

      // End
      // _________________________________________________________________
    ])
