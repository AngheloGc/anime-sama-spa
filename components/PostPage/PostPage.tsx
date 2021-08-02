import { DisqusComments } from '../../common/Disqus';
import { PostPageProps } from './props';
import { AfterContent, AuthorImage, Content, FeaturedImage, PostWrapper, PublicationDate, Title } from './styled'

const DefaultAuthorImage = 'https://c.disquscdn.com/uploads/forums/559/2040/avatar92.jpg?1586983768'

export const PostPage: React.FC<PostPageProps> = ({postData}) => {
  return (
    <PostWrapper>
      <FeaturedImage src={postData?.featuredImage.node.sourceUrl} />
      <Title>{postData?.title}</Title>
      <PublicationDate>
        <p>Publicado el {postData?.date.split('T')[0]} por {postData?.author.node.name}</p>
        <AuthorImage src={postData?.author.node.avatar?.url || DefaultAuthorImage} />
      </PublicationDate>
      <Content dangerouslySetInnerHTML={{ __html: postData?.content }}></Content>
      <AfterContent>
        <DisqusComments postId={postData?.id} postTitle={postData?.title} />
      </AfterContent>
    </PostWrapper>
  );
};
