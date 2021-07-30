import styled, { css } from 'styled-components'

interface HorizontalPostWrapperProps {
    size: 'large' | 'medium' | 'small' | 'x-small'
}

export const HorizontalPostWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;
    align-items: center;

    ${(props: HorizontalPostWrapperProps) => props.size === 'large' && css`
        h3 { font-size: 2rem } p { font-size: 1rem }
        img { max-height: 24rem }
    `}

    ${(props: HorizontalPostWrapperProps) => props.size === 'medium' && css`
        h3 { font-size: 1.3rem } p { font-size: .9rem }
        img { max-height: 11.25rem }
    `}

    ${(props: HorizontalPostWrapperProps) => props.size === 'small' && css`
        h3 { font-size: 1.1rem } p { font-size: .8rem }
        img { max-height: 4.4rem }
    `}

    ${(props: HorizontalPostWrapperProps) => props.size === 'x-small' && css`
        h3 { font-size: 1rem; font-weight: 500; } p { font-size: .7rem }
        img { max-height: 3.75rem; min-height: 3.75rem; min-width: 6.5rem; max-width: 6.5rem; }
    `}

    &:hover {
        filter: contrast(115%);
        transform: scale(102%);
    }
`

export const HorizontalPostContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const FeaturedImage = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 4px;
`

export const Headline = styled.h3`
    color: #333333;
`

export const Excerpt = styled.p`
    color: #585858;
    line-height: 1.4rem;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
`