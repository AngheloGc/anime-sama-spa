export interface ServerPost {
  excerpt: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  slug: string
  title: string
  date: string
  id: string | number
  content?: string
  extendedPostProps: {
    postLabel: string | null
    webFeaturedImage: {
      sourceUrl: string
    } | null
  }
}

export interface GetReviewPostsResponse {
  posts: { edges: ({ node: ServerPost })[] }
}