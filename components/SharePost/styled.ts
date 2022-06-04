import styled from 'styled-components'

export const SharePostWrapper = styled.div`
    border: 1px solid #FF6C38;
    color: #FF6C38;
    padding: 0.5rem 1rem;
    margin: 2rem auto;
    max-width: 400px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.25s ease-in;
    cursor: pointer;

    &:hover {
        background-color: #FF6C38;
        color: white;
    }

    @media (max-width: 1040px) {
        display: flex;
        margin: 2rem;
    }

    span {
        margin-right: 0.5rem;
    }
`