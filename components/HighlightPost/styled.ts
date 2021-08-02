import styled from 'styled-components'

export const HighlightPostWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 2rem;
    align-items: center;
    cursor: pointer;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
    }
`

export const HighlightPostContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const FeaturedImage = styled.img`
    width: 100%;
    max-height: 18rem;
    min-height: 18rem;
    border-radius: 4px;
    object-fit: cover;
`

export const Headline = styled.h3`
    font-size: 2rem;
    padding: 1rem 0;
`

export const Excerpt = styled.p`
    color: #E3E3E3;
    line-height: 1.4rem;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
`