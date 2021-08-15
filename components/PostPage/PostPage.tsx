import { DisqusComments } from '../../common/Disqus';
import { SharePost } from '../SharePost';
import { PostPageProps } from './props';
import { SimilarPosts } from './SimilarPosts';
import { SocialMediaSharingButtons } from './SocialMediaSharingButtons';
import { AfterContent, AuthorImage, Content, ContentWrapper, FeaturedImage, PostWrapper, PublicationDate, Title } from './styled'

const DefaultAuthorImage = 'https://c.disquscdn.com/uploads/forums/559/2040/avatar92.jpg?1586983768'

export const PostPage: React.FC<PostPageProps> = ({postData}) => {
  return (
    <PostWrapper>
      <article>
        <Title>{postData?.title}</Title>
        <PublicationDate>
          <p>Publicado el {postData?.date.split('T')[0]} por {postData?.author.node.name}</p>
          <AuthorImage src={postData?.author.node.avatar?.url || DefaultAuthorImage} />
        </PublicationDate>
        <ContentWrapper>
          <aside>
            <SocialMediaSharingButtons title={postData?.title} url={global.window && window.location.href} orientation="VERTICAL" />
          </aside>
          <section>
            <FeaturedImage src={postData?.featuredImage.node.sourceUrl} />
            <Content dangerouslySetInnerHTML={{ __html: postData?.content }}></Content>
          </section>
          <aside>
            <SimilarPosts />
          </aside>
        </ContentWrapper>
        <SharePost title={postData?.title} description={'Ver nota completa en:'} url={global.window && window.location.href} />
        <AfterContent>
          <DisqusComments postId={postData?.id} postTitle={postData?.title} />
        </AfterContent>
      </article>
    </PostWrapper>
  );
};
