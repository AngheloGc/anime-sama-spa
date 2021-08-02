import React from 'react'
import Link from 'next/link'
import he from 'he'
import { SinglePostProps } from './props'
import { Author, AuthorImage, Excerpt, FeaturedImage, Headline, SinglePostWrapper } from './styled'

const DefaultAuthorImage = 'https://c.disquscdn.com/uploads/forums/559/2040/avatar92.jpg?1586983768'

export const SinglePost: React.FC<SinglePostProps> = ({ postData, hasExcerpt = false, showAuthor = false, size }) => {
    const handleExcerpt = (excerpt: string) => {
        const stripedHTML = excerpt.replace(/<[^>]+>/g, '')
        const decodedStripedHTML = he.decode(stripedHTML)
        return decodedStripedHTML
    }
    return (
        <Link href={`/posts/${postData?.node.slug}`}>
            <SinglePostWrapper size={size}>
                <FeaturedImage src={postData?.node.featuredImage.node.sourceUrl} />
                <Headline>{postData?.node.title}</Headline>
                {hasExcerpt && <Excerpt>{handleExcerpt(postData?.node.excerpt)}</Excerpt>}
                {showAuthor && (
                    <Author>
                        <strong>Publicado por </strong>
                        <span>{postData?.node.author?.node.name} </span>
                        <AuthorImage src={postData?.node.author?.node.avatar?.url || DefaultAuthorImage} />
                    </Author>
                )}
            </SinglePostWrapper>
        </Link>
    )
}