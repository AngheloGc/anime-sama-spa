import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../components/Layout'
import { getAllPostsForHome, getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { Content, FeaturedImage, PostWrapper, PublicationDate, Title } from './styled'

export default function Post({ post, posts, preview, popularPosts }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <div>Error!</div>
  }

  return (
    <Layout footerPosts={popularPosts}>
      <PostWrapper>
        <FeaturedImage src={post.featuredImage.node.sourceUrl} />
        <Title>{post.title}</Title>
        <PublicationDate>
          <p>Publicado el {post.date.split('T')[0]} por {post.author.node.name}</p>
        </PublicationDate>
        <Content dangerouslySetInnerHTML={{__html: post?.content}}></Content>
      </PostWrapper>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      popularPosts: allPosts.popular.edges,
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
