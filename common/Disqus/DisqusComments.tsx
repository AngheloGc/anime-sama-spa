import Disqus from 'disqus-react'
import { DisqusCommentsProps } from './props'

export const DisqusComments: React.FC<DisqusCommentsProps> = ({postId, postTitle}) => {
    return (
        <Disqus.DiscussionEmbed
          shortname="animesamadesu"
          config={{
            url: 'http://localhost:3000',
            identifier: postId,
            title: postTitle,
          }}
        />
    )
}