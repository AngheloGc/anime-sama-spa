import styled, { css } from 'styled-components'

interface SinglePostWrapperProps {
    size: 'large' | 'medium' | 'small'
}

export const SinglePostWrapper = styled.a`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    ${(props: SinglePostWrapperProps) => props.size === 'large' && css`
        h3 {
            padding: 1rem 0;
            font-size: 2rem
        }
        p { font-size: 1rem }
        img {
            min-height: 24rem;
            max-height: 24rem;
        }
    `}

    ${(props: SinglePostWrapperProps) => props.size === 'medium' && css`
        h3 {
            padding: 0.75rem 0;
            font-size: 1.25rem
        }
        p { font-size: .9rem }
        img {
            min-height: 11.25rem;
            max-height: 11.25rem;
        }
    `}

    ${(props: SinglePostWrapperProps) => props.size === 'small' && css`
        h3 {
            padding: 0.5rem 0;
            font-size: 1rem
        }
        p { font-size: .8rem }
        img {
            min-height: 4.4rem;
            max-height: 4.4rem;
        }
    `}

    &:hover {
        filter: contrast(115%);
        transform: scale(102%);
    }
`

export const FeaturedImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
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

export const Author = styled.p`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #333333;

    span {
        margin: 0 0.25rem;
    }
`

export const AuthorImage = styled.img`
    width: 1rem;
    height: 1rem;
    min-height: 1rem!important;
    max-height: 1rem!important;
    object-fit: cover;
    border-radius: 1rem;
`