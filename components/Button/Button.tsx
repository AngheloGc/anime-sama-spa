import styled from 'styled-components'

export const Button = styled.button`
    font-family: 'Roboto';
    text-transform: uppercase;
    font-style: italic;
    background-color: #FF6C38;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 0.45rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    svg {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 0.5rem;
    }

    &:hover {
        transform: scale(105%);
    }
`