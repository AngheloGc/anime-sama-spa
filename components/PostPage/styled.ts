import styled from 'styled-components'

export const PostWrapper = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 1040px;
    margin: 2rem auto;
    box-sizing: border-box;

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
    max-height: 24rem;
    min-height: 24rem;
    object-fit: cover;
    border-radius: 4px;

    @media (max-width: 1040px) {
        border-radius: 0;
        max-height: 16rem;
        min-height: 16rem;
    }
`

export const Title = styled.h1`
    border-bottom: 3px solid #C9C9C9;
    padding: 2rem 0;
    font-size: 2.5rem;
    position: relative;

    @media (max-width: 1040px) {
        margin: 0 2rem;
        font-size: 1.8rem;
    }
`

export const Content = styled.section`
    line-height: 1.9rem;
    color: #383838;

    @media (max-width: 1040px) {
        padding: 0 2rem;
    }

    p {
        margin: 1.5rem 0;
        font-family: 'Roboto';
        font-size: 1.2rem;
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

export const PublicationDate = styled.div`
    margin: 2rem 0 1rem;
    color: #585858;

    @media (max-width: 1040px) {
        padding: 0 2rem;
    }
`