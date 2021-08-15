import request from 'graphql-request'
import useSWR from 'swr'
import { HorizontalPost } from '../HorizontalPost'
import { SimilarPostsSkeleton } from './SimilarPostsSkeleton'
import { SimilarPostsContent, SimilarPostsWrapper } from './styled'

const handleFetch = query => request('https://animesama.info/graphql', query)

export const SimilarPosts: React.FC = () => {
    const { data, error } = useSWR(`{
        popular: popularPosts(first: 4) {
            edges {
                node {
                    title
                    slug
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }}`, handleFetch, { revalidateOnFocus: false })

    if(error) return null

    return (
        <SimilarPostsWrapper>
            {data
            && (
                <>
                <h4>También te puede interesar:</h4>
                <SimilarPostsContent>
                    <HorizontalPost size="x-small" postData={data?.popular?.edges[0]} hasExcerpt={false} />
                    <HorizontalPost size="x-small" postData={data?.popular?.edges[1]} hasExcerpt={false} />
                    <HorizontalPost size="x-small" postData={data?.popular?.edges[2]} hasExcerpt={false} />
                    <HorizontalPost size="x-small" postData={data?.popular?.edges[3]} hasExcerpt={false} />
                </SimilarPostsContent>
                </>
            )
            || <SimilarPostsSkeleton />}
        </SimilarPostsWrapper>
    )
}