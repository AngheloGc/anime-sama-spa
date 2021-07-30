import { PostPageProps } from './props';
import { Content, FeaturedImage, PostWrapper, PublicationDate, Title } from './styled'

export const PostPage: React.FC<PostPageProps> = ({postData}) => {
  return (
    <PostWrapper>
      <FeaturedImage src={postData.featuredImage.node.sourceUrl} />
      <Title>{postData.title}</Title>
      <PublicationDate>
        <p>Publicado el {postData.date.split('T')[0]} por {postData.author.node.name}</p>
      </PublicationDate>
      <Content dangerouslySetInnerHTML={{ __html: postData?.content }}></Content>
    </PostWrapper>
  );
};
