import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    background-color: #2C2C2C;
    padding: 4.25rem 4.25rem 0 4.25rem;

    @media (max-width: 1040px) {
        padding: 2rem;
    }

    h2 {
        color: white;
        font-size: 1.1rem;
    }

    h3 {
        color: white;
        font-size: 0.9rem;
        opacity: 0.8;
    }
`

export const PopularPosts = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const FooterContent = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.1fr;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
`

export const FooterLeft = styled.div`
    display: grid;
    grid-gap: 1.75rem;
    padding-right: 4rem;

    @media (max-width: 1040px) {
        padding: 0
    }
`

export const FooterRight = styled.div`
    display: grid;
    grid-gap: 1.75rem;
    border-left: 1px solid #424242;
    padding-left: 4rem;

    @media (max-width: 1040px) {
        padding: 0;
        border-left: none;
    }
`

export const UsefulLinks = styled.div`
    display: grid;

    @media (max-width: 1040px) {
        grid-gap: 1.5rem;
    }
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-auto-flow: column;
    grid-gap: 0.5rem;

    @media (max-width: 1040px) {
        grid-gap: 1rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-auto-flow: row;
    }

    a {
        color: #9A9A9A;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }

    a:visited {
        color: #9A9A9A;
    }

    a:hover {
        color: white;
    }
`

export const SocialIcons = styled.div`
    display: grid;

    @media (max-width: 1040px) {
        grid-gap: 1.5rem;
    }
`

export const Icons = styled.div`
    display: flex;

    svg {
        margin-right: 1rem;
    }
`

export const Copyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0 2rem;

    grid-column: 1 / 3;

    @media (max-width: 1040px) {
        padding: 0;
        flex-direction: column;
        align-items: flex-start;
        grid-column: 1 / 2;
    }

    img {
        height: 1.35rem;
        width: 6.68rem;
        object-fit: contain;
        position: relative;
        top: 0.1rem;
    }

    p {
        margin-left: 0.5rem;
        color: #9A9A9A;

        @media (max-width: 1040px) {
            margin-left: 0;
            margin-top: 0.5rem;
        }
    }
`