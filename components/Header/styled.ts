import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background-color: #2C2C2C;
    padding: 1.25rem 0;

    @media (max-width: 768px) {
        padding-right: 1rem;
        padding-left: 0.25rem;
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

    @media (max-width: 768px) {
        svg {
            min-width: 4rem;
            max-width: 4rem;
            min-height: 3.75rem;
            max-height: 3.75rem;
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
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    border-left: 1px solid #4E4E4E;
    margin-left: 2rem;
    padding: 0.5rem 0 0.5rem 2rem;

    @media (max-width: 768px) {
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