import S from '@sanity/desk-tool/structure-builder'
import {
  MdArticle,
  MdCategory,
  MdSettings,
  MdLibraryMusic,
  MdVideogameAsset
} from 'react-icons/md'

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

        .icon(MdCategory),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post'))

        .icon(MdArticle),

      // Event
      // _________________________________________________________________

      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events'))

        .icon(MdLibraryMusic),

      // Experience
      // _________________________________________________________________

      S.listItem()
        .title('Experiential')
        .schemaType('experience')
        .child(S.documentTypeList('experience').title('Experiential'))

        .icon(MdVideogameAsset)

      // End
      // _________________________________________________________________
    ])
