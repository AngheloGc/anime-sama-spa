import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background-color: #222;
    padding: 1.25rem 0;

    @media (max-width: 1040px) {
        padding-right: 1rem;
        padding-left: 0.25rem;

        button {
            padding: 0.55rem 0.75rem;
            font-size: 0.8rem;
            svg {
                width: 1.25rem;
                height: auto;
            }
        }
    }
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    max-width: 1040px;
    margin: 0 auto;
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    @media (max-width: 1040px) {
        svg {
            min-width: 3rem;
            max-width: 3rem;
            min-height: 2.85rem;
            max-height: 2.85rem;
            position: relative;
            left: 0.3rem;
        }
    }
`

export const Logo = styled.img`
    width: 2.625rem;
    height: 2.375rem;
    object-fit: cover;
    margin-right: 0.5rem;
`

export const BlogName = styled.h2`
    font-family: 'Uni Sans';
    font-style: italic;
    text-transform: uppercase;
    font-size: 1.875rem;
    color: white;

    @media (max-width: 1040px) {
        font-size: 1.55rem;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    border-left: 1px solid #4E4E4E;
    margin-left: 2rem;
    padding: 0.5rem 0 0.5rem 2rem;

    @media (max-width: 1040px) {
        display: none;
    }

    a {
        color: #D6D6D6;
        font-size: .95rem;
        margin-right: 2rem;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: white;
        }
    }
`