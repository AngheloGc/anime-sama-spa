import styled, { css } from 'styled-components'

export const PostWrapper = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 1040px;
    margin: 2rem auto;
    box-sizing: border-box;

    #disqus_recommendations {
        display: none;
    }

    @media (max-width: 1040px) {
        margin: 0 auto 2rem;
    }

    h1:after {
        box-sizing: border-box;
        content: '.';
        color: transparent;
        position: absolute;
        border-bottom: 3px solid #FF6C38;
        bottom: -3px;
        left: 0;
        z-index: 100;
        width: 15%;
    }
`

export const FeaturedImage = styled.img`
    width: 100%;
    max-width: 650px;
    max-height: 28.5rem;
    height: auto;
    object-fit: cover;
    border-radius: 4px;

    @media (max-width: 1040px) {
        height: auto;
        max-width: 100%;
        width: 100%;
        padding: 0 2rem;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
    }
`

export const Title = styled.h1`
    border-bottom: 3px solid #C9C9C9;
    padding: 1.25rem 0;
    font-size: 2.25rem;
    position: relative;

    @media (max-width: 1040px) {
        margin: 0 2rem;
        font-size: 1.8rem;
        padding: 1.5rem 0;
    }
`

export const Content = styled.section`
    line-height: 2.2rem;
    color: #383838;
    margin: 2rem 0;
    max-width: 650px;

    @media (max-width: 1040px) {
        padding: 0 2rem;
    }

    p {
        margin: 1.5rem 0;
        font-family: 'Roboto';
        font-size: 1.2rem;
        font-weight: 300;
    }

    a {
        color: #FF6C38
    }

    a:visited {
        color: #FF6C38;
    }

    img, figure {
        display: block;
        margin: 0 auto;
        border-radius: 4px;
        max-width: 100%;
        height: auto;
    }

    iframe {
        max-width: 100%;
    }

    blockquote {
        background-color: #F5F5F5;
        border-radius: 4px;
        margin: 2rem 0;
        padding: 0.25rem 2rem;
        display: block;
    }
`

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 600px 1fr;
    gap: 1.5rem;
    position: relative;
    max-width: 100%;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;

        aside {
            display: none
        }

        section {
            max-width: 100%;
        }
    }
`

export const PublicationDate = styled.div`
    margin: 2rem 0;
    color: #585858;
    display: flex;
    align-items: center;

    p {
        margin-right: 0.5rem;
    }

    @media (max-width: 1040px) {
        padding: 0 2rem;
    }
`

export const AuthorImage = styled.img`
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 3rem;
    object-fit: cover;
`

export const AfterContent = styled.div`
    padding: 0 2rem;
`

interface SocialMediaSharingButtonsWrapperProps {
    orientation: 'HORIZONTAL' | 'VERTICAL'
}

export const SocialMediaSharingButtonsWrapper = styled.div`

    display: flex;

    ${(props: SocialMediaSharingButtonsWrapperProps) => props.orientation === 'VERTICAL' && css`
        flex-direction: column;
        button {margin-bottom: 0.15rem}
    `}

    ${(props: SocialMediaSharingButtonsWrapperProps) => props.orientation === 'HORIZONTAL' && css`
        flex-direction: row;
        button {margin-right: 0.15rem}
    `}

`

export const SimilarPostsWrapper = styled.div`
    margin-bottom: 2rem;
    h4 { color: #383838 }
`

export const SimilarPostsContent = styled.div`
    display: grid;
    gap: 1rem;
    padding: 1rem 0;
`

export const Advertisment = styled.div`
    position: sticky;
    top: 2rem;
`