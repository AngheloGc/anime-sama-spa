import { fetchAPI } from '../lib/wordpress'
import { GetReviewPostsResponse } from './interfaces'

export const getReviewPosts = () => {
  return fetchAPI<GetReviewPostsResponse>({
    query: `
    query reviews {
      posts(where: {categoryId: 44}, first: 20) {
        edges {
            node {
                id
              slug
                featuredImage {
                    node {
                      sourceUrl
                    }
                }
                categories {
                    edges {
                        node {
                            name
                        }
                    }
                }
                date
                excerpt(format: RENDERED)
                title
                author {
                    node {
                        name
                    }
                }
                uri
            }
        }
      }
    }
    `
  })
}