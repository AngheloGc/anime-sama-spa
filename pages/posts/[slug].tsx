import { useRouter } from 'next/router'
import React from 'react'
import { PostPage } from '../../components/PostPage'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'


export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <div>Error!</div>
  }

  return (
    <PostPage postData={post} />
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()



  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
