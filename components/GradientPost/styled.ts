import styled from 'styled-components'

interface GradientPostWrapperProps {
    imageUrl: string
}

export const GradientPostWrapper = styled.div`
    background-image: url(${(props: GradientPostWrapperProps) => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
        filter: contrast(115%);
        transform: scale(102%);
    }
`

export const GradientPostContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background: linear-gradient(to bottom, transparent, black);
    padding: 1.5rem;
    min-height: 18rem;
`

export const Tag = styled.span`
    font-family: 'Uni Sans';
    font-weight: bold;
    text-transform: uppercase;
    font-style: italic;
    background-color: #FF6C38;
    border-radius: 4px;
    color: white;
    padding: 0.15rem 0.75rem;
    font-size: .9rem;
    margin-bottom: 1rem;
`

export const Headline = styled.h3`
    font-size: 1.8rem;
    color: white;
`