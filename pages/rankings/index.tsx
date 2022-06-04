import useSWR from 'swr'
import PageLayout from '../../components/Layout/PageLayout'
import { SinglePost } from '../../components/SinglePost'
import useFetch from '../../utils/useFetch'

export default function Rankings() {
  const { handleFetch } = useFetch()
  const { data, error } = useSWR(getNewsQuery, handleFetch, { revalidateOnFocus: false })

  return (
    <PageLayout>
      {data && data?.news.edges.map(edge => (
        <SinglePost postData={edge} hasExcerpt size="medium" showAuthor />
      ))}
      {error && `Ocurrió un error inesperado.`}
    </PageLayout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  return { props: { hello: null } }
//   const data = await getPostAndMorePosts(params.slug, preview, previewData)

//   return {s
//     props: {
//       preview,
//       post: data.post,
//       posts: data.posts,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()



//   return {
//     paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
//     fallback: true,
//   }
}

const getNewsQuery = `
  {
    news: posts(where: {categoryId: 53}) {
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
          uri
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
`
