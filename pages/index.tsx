import { Homepage } from '../components/Home/homepage'
import { Layout } from '../components/Layout'
import { getAllPostsForHome } from '../lib/api'


export default function Index({ allPosts, footerPosts }) {

  return (
    <Layout footerPosts={footerPosts.popular}>
      <Homepage posts={allPosts} />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: {
      allPosts: {
        mainNews: allPosts.main.edges,
        reviews: allPosts.reviews.edges,
        rankings: allPosts.rankings.edges,
        featured: allPosts.featured.edges,
        trending: allPosts.trending.edges,
      },
      footerPosts: {
        popular: allPosts.popular.edges,
      },
      preview
    }
  }
}
