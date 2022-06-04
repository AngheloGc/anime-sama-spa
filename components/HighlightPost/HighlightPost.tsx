import React from 'react'
import he from 'he'
import Link from 'next/link'
import { SectionHeadline } from '../SectionHeadline'
import { HighlightPostProps } from './props'
import { Excerpt, FeaturedImage, Headline, HighlightPostContent, HighlightPostWrapper } from './styled'
import { useExcerpt } from '../../utils'

export const HighlightPost:React.FC<HighlightPostProps> = ({ label, postData }) => {
    const { handleExcerpt } = useExcerpt()

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