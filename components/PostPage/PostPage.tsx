import Head from 'next/head'
import { SharePost } from '../SharePost'
import { PostPageProps } from './props'
import { SimilarPosts } from './SimilarPosts'
import { SocialMediaSharingButtons } from './SocialMediaSharingButtons'
import { Advertisment, AfterContent, AuthorImage, Content, ContentWrapper, FeaturedImage, PostWrapper, PublicationDate, Title } from './styled'
import { DiscussionEmbed, Recommendations } from 'disqus-react'
import { PostPageAd } from '../../common/GoogleAdsense'
import { useExcerpt } from '../../utils'

const DefaultAuthorImage = 'https://c.disquscdn.com/uploads/forums/559/2040/avatar92.jpg?1586983768'

export const PostPage: React.FC<PostPageProps> = ({ postData }) => {
  const { handleExcerpt } = useExcerpt()

  return (
    <>
    <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AnimeSamaDesu" />
        <meta name="twitter:creator" content="@AnimeSamaDesu" />
        <meta property="og:url" content={global.window && window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData?.title} />
        <meta property="og:description" content={handleExcerpt(postData?.excerpt || 'No excerpt')} />
        <meta property="og:image" content={postData?.featuredImage.node.sourceUrl} />
        <title>{postData?.title} - Anime Sama</title>
    </Head>
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
            <Advertisment dangerouslySetInnerHTML={{ __html: PostPageAd }} />
          </aside>
        </ContentWrapper>
        <SharePost title={postData?.title} description={'Ver nota completa en:'} url={global.window && window.location.href} />
        <AfterContent>
          <Recommendations
            shortname="animesamadesu"
            config={{
              url: `https://animesama.net/${postData?.slug}`,
              identifier: postData?.slug,
              title: postData?.title,
            }}
          />
          <DiscussionEmbed
            shortname="animesamadesu"
            config={{
              url: `https://animesama.net/${postData?.slug}`,
              identifier: postData?.slug,
              title: postData?.title,
            }}
          />
        </AfterContent>
      </article>
    </PostWrapper>
    </>
  );
};
