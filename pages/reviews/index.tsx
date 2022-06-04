import PageLayout from '../../components/Layout/PageLayout'
import { SinglePost } from '../../components/SinglePost'
import { getReviewPosts } from '../../services'

export default function Reviews({ posts }) {

  return (
    <PageLayout>
      {posts.map(edge => (
        <SinglePost postData={edge} hasExcerpt size="medium" showAuthor />
      ))}
    </PageLayout>
  )
}

export async function getStaticProps() {
  const data = await getReviewPosts()

  return {
    props: {
      posts: data?.posts.edges || [],
    },
    revalidate: 60,
  }
}