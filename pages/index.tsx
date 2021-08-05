import { Homepage } from '../components/Home/homepage'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts }) {
  return <Homepage posts={allPosts} />
}

export async function getServerSideProps({ preview = false }) {
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
      preview
    }
  }
}