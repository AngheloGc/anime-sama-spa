import styled from 'styled-components'

interface ReviewsBackgroundProps {
    imageUrl: string
}

export const MainNews = styled.section`
    display: grid;
    grid-template-columns: 43.68rem 19.81rem;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    a:nth-child(1) {
        grid-row: 1 / 3;
    }

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
        padding: 0 2rem;

        img {
            max-height: 11.25rem;
            min-height: 11.25rem;
        }

        h3 {
            font-size: 1.5rem;
        }
    }
`

export const Reviews = styled.section`
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        filter: contrast(115%);
        transform: scale(102%);
    }
`

export const ReviewsBackground = styled.div`
    background-image: url(${(props: ReviewsBackgroundProps) => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 50;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    filter: blur(12px);
`

export const ReviewsContent = styled.div`
    position: relative;
    z-index: 100;
    background-color: rgba(0,0,0,0.6);
    color: white;
    padding: 4.5rem 2.5rem;
`

export const FeaturedPosts = styled.section`
    padding: 3rem 0;
    display: grid;
    grid-gap: 2.5rem;

    @media (max-width: 1040px) {
        padding: 3rem 2rem;
    }
`

export const FeaturedPostsContent = styled.div`
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
    }
`

export const SecondaryPosts = styled.section`
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: 1.5fr 1fr;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
        padding: 0 2rem;
    }
`

export const RankingPosts = styled.section`
    display: grid;
    grid-gap: 2.5rem;
`

export const RankingPostsFooter = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
`

export const HotTrendingPosts = styled.section`
    display: grid;
    grid-gap: 2.5rem;
    align-content: baseline;
`

export const HotTrendingPostsFooter = styled.div`
    display: grid;
    grid-gap: 1.25rem;
`