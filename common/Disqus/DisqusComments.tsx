import Disqus from 'disqus-react'
import { DisqusCommentsProps } from './props'

export const DisqusComments: React.FC<DisqusCommentsProps> = ({postId, postTitle, url}) => {
    return (
        <Disqus.DiscussionEmbed
          shortname="animesamadesu"
          config={{
            url,
            identifier: postId,
            title: postTitle,
          }}
        />
    )
}