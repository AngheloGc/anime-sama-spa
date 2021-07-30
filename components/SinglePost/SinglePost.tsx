import React from 'react'
import Link from 'next/link'
import he from 'he'
import { SinglePostProps } from './props'
import { Excerpt, FeaturedImage, Headline, SinglePostWrapper } from './styled'

export const SinglePost: React.FC<SinglePostProps> = ({ postData, hasExcerpt = false, size }) => {
    const handleExcerpt = (excerpt: string) => {
        const stripedHTML = excerpt.replace(/<[^>]+>/g, '')
        const decodedStripedHTML = he.decode(stripedHTML)
        return decodedStripedHTML
    }
    return (
        <Link href={`/posts/${postData.node.slug}`}>
            <SinglePostWrapper size={size}>
                <FeaturedImage src={postData.node.featuredImage.node.sourceUrl} />
                <Headline>{postData.node.title}</Headline>
                {hasExcerpt && <Excerpt>{handleExcerpt(postData.node.excerpt)}</Excerpt>}
            </SinglePostWrapper>
        </Link>
    )
}