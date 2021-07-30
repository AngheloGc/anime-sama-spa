import { GradientPostProps } from './props'
import { GradientPostContent, GradientPostWrapper, Headline, Tag } from './styled'

export const GradientPost: React.FC<GradientPostProps> = ({ postData, tag }) => {
    return (
        <GradientPostWrapper imageUrl={postData.node.featuredImage.node.sourceUrl}>
            <GradientPostContent>
                <Tag>{tag}</Tag>
                <Headline>{postData.node.title}</Headline>
            </GradientPostContent>
        </GradientPostWrapper>
    )
}