declare module '*.png'
declare module '*.svg'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'
declare module '*.woff'
declare module '*.woff2'

declare module 'hover-effect'
declare module '@sanity/block-content-to-react'
declare module 'gatsby-source-sanity'

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  // immutable
  readonly current: T | null
}