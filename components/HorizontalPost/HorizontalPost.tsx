import { HorizontalPostProps } from './props'
import { Excerpt, FeaturedImage, Headline, HorizontalPostContent, HorizontalPostWrapper } from './styled'

export const HorizontalPost: React.FC<HorizontalPostProps> = ({ size, postData, hasExcerpt = false }) => {
    return (
        <HorizontalPostWrapper size={size}>
            <FeaturedImage src={postData.node.featuredImage.node.sourceUrl} />
            <HorizontalPostContent>
                <Headline>{postData.node.title}</Headline>
                {hasExcerpt && <Excerpt>{postData.node.excerpt}</Excerpt>}
            </HorizontalPostContent>
        </HorizontalPostWrapper>
    )
}