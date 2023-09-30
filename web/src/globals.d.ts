// TODO: More consistent naming / nesting
import { type IGatsbyImageData } from 'gatsby-plugin-image'

export type GatsbyImageDataShape = {
  aspectRatio: number
  backgroundColor: string
  breakpoints: number
  fit: string
  formats: string[]
  height: number
  images: any
  layout: string
  outputPixelDensities: number
  placeholder: string
  sizes: string
  width: number
}

export type SettingsShape = {
  settings: {
    edges: {
      node: {
        author: string
        backgroundColor: string
        banner: {
          asset: {
            gatsbyImageData: any
            url: string
          }
        }
        description: string
        googleAnalyticsID: string
        headline: string
        language: string
        logo: string
        ogLanguage: string
        ogSiteName: string
        siteName: string
        themeColor: string
        title: string
        titleAlt: string
        titleShort: string
        url: string
        userTwitter: string
      }
    }[]
  }
}

// Experience shape
export type ExperienceShape = {
  experiences: {
    edges: ExperienceEdges[]
  }
}

export type ExperienceEdges = {
  node: ExperienceQuery
}

export type ExperienceData = {
  experience: ExperienceQuery
}

export type ExperienceQuery = {
  _rawExcerpt: string
  _rawInfo: string
  ageGroup: string
  category: {
    title: string
  }[]
  figure: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
    caption: string
  }
  poster: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
    caption: string
  }
  videoUrl: string
  slug: {
    current: string
  }
  subTitle: string
  tags: {
    tag: string
  }[]
  title: string
  contactEmail: string
  socialLinks: {
    label: string
    url: string
  }[]
}

export type ExperienceContextShape = {
  pageContext: {
    experience: ExperienceQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Event shape
export type EventShape = {
  events: {
    edges: EventEdges[]
  }
}

export type EventEdges = {
  node: EventQuery
}

export type EventData = {
  event: EventQuery
}

export type EventQuery = {
  _rawExcerpt: string
  _rawInfo: string
  address: string
  ageGroup: string
  category: {
    title: string
  }[]
  city: string
  figure: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
    caption: string
  }
  slug: {
    current: string
  }
  startDate: string
  state: string
  subTitle: string
  tags: {
    tag: string
  }[]
  ticketUrl: string
  title: string
  venue: string
}

export type EventContextShape = {
  pageContext: {
    event: EventQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Post shape
export type PostShape = {
  posts: {
    edges: PostEdges[]
  }
}

export type PostEdges = {
  node: PostQuery
}

export type PostData = {
  post: PostQuery
}

export type PostQuery = {
  _rawFigure: string
  _rawExcerpt: string
  _rawBody: string
  _id: string
  authors: PostAuthor
  categories: {
    title: string
  }[]
  figure: {
    alt: string
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
    caption: string
  }
  title: string
  publishedAt: string
  slug: {
    current: string
  }
  tags: {
    tag: string
  }[]
}

export type PostAuthor = {
  name: string
  role: string
  avatar: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
}

export type PostContextShape = {
  pageContext: {
    post: PostQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Speaker shape
export type SpeakerShape = {
  speakers: {
    edges: SpeakerEdges[]
  }
}

export type SpeakerEdges = {
  node: SpeakerQuery
}

export type SpeakerQuery = {
  _createdAt: string
  _id: string
  _rawBio: string
  company: string
  figure: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  isKeynote: boolean
  name: string
  position: string
  slug: {
    current: string
  }
  topic: string
  twitter: string
}
