import React from 'react'
import { GradientPost } from '../../components/GradientPost'
import { HighlightPost } from '../../components/HighlightPost'
import { HorizontalPost } from '../../components/HorizontalPost'
import { SectionHeadline } from '../../components/SectionHeadline'
import { Separator } from '../../components/Separator'
import { SinglePost } from '../../components/SinglePost'
import {
  FeaturedPosts,
  FeaturedPostsContent,
  HotTrendingPosts,
  HotTrendingPostsFooter,
  MainNews,
  RankingPosts,
  RankingPostsFooter,
  Reviews,
  ReviewsBackground,
  ReviewsContent,
  SecondaryPosts,
} from './styled'

interface HomepageProps {
  posts: any
}

export const Homepage: React.FC<HomepageProps> = ({ posts }) => {
  const { mainNews, reviews, rankings, featured, trending } = posts
  return (
    <main>
      <MainNews>
        <SinglePost postData={mainNews[0]} hasExcerpt={true} showAuthor={true} size="large" />
        <SinglePost postData={mainNews[1]} hasExcerpt={true} showAuthor={true} size="medium" />
        <SinglePost postData={mainNews[2]} hasExcerpt={true} showAuthor={true} size="medium" />
      </MainNews>
      <Separator size={50} />
      <Reviews>
        <ReviewsBackground imageUrl={reviews[0]?.node.featuredImage.node.sourceUrl} />
        <ReviewsContent>
          <HighlightPost label="Reseña" postData={reviews[0]} />
        </ReviewsContent>
      </Reviews>
      <FeaturedPosts>
        <SectionHeadline label="Destacados" />
        <FeaturedPostsContent>
          <SinglePost postData={featured[0]} hasExcerpt={false} size="medium" />
          <SinglePost postData={featured[1]} hasExcerpt={false} size="medium" />
          <SinglePost postData={featured[2]} hasExcerpt={false} size="medium" />
        </FeaturedPostsContent>
      </FeaturedPosts>
      <SecondaryPosts>
        <RankingPosts>
          <SectionHeadline label="Rankings" />
          <GradientPost postData={rankings[0]} tag="Lo último" />
          <RankingPostsFooter>
            <SinglePost postData={rankings[1]} hasExcerpt={false} size="medium" />
            <SinglePost postData={rankings[2]} hasExcerpt={false} size="medium" />
          </RankingPostsFooter>
        </RankingPosts>
        <HotTrendingPosts>
          <SectionHeadline label="Eventos" />
          <SinglePost postData={trending[0]} hasExcerpt={true} showAuthor={true} size="medium" />
          <HotTrendingPostsFooter>
            <HorizontalPost postData={trending[1]} hasExcerpt={false} size="small" />
            <HorizontalPost postData={trending[2]} hasExcerpt={false} size="small" />
            <HorizontalPost postData={trending[3]} hasExcerpt={false} size="small" />
          </HotTrendingPostsFooter>
        </HotTrendingPosts>
      </SecondaryPosts>
    </main>
  )
}
