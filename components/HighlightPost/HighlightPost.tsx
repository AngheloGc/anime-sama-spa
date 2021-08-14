import React from 'react'
import he from 'he'
import Link from 'next/link'
import { SectionHeadline } from '../SectionHeadline'
import { HighlightPostProps } from './props'
import { Excerpt, FeaturedImage, Headline, HighlightPostContent, HighlightPostWrapper } from './styled'

export const HighlightPost:React.FC<HighlightPostProps> = ({ label, postData }) => {
    const handleExcerpt = (excerpt: string) => {
        const stripedHTML = excerpt.replace(/<[^>]+>/g, '')
        const decodedStripedHTML = he.decode(stripedHTML)
        return decodedStripedHTML
    }
    return (
        <Link href={`/${postData?.node.slug}`}>
            <HighlightPostWrapper>
                <HighlightPostContent>
                    <SectionHeadline label={label} />
                    <Headline>{postData?.node.title}</Headline>
                    <Excerpt>{handleExcerpt(postData?.node.excerpt)}</Excerpt>
                </HighlightPostContent>
                <FeaturedImage src={postData?.node.featuredImage.node.sourceUrl} />
            </HighlightPostWrapper>
        </Link>
    )
}