import PageLayout from '../../components/Layout/PageLayout'

export default function Contact() {

  return (
    <PageLayout>
      En construcción
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