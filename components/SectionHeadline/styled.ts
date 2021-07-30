import styled, { css } from 'styled-components'

interface SectionHeadlineWrapperProps {
    appearance: 'normal' | 'compact'
}

export const SectionHeadlineWrapper = styled.div`
    font-family: 'Uni Sans';
    text-transform: uppercase;
    font-style: italic;

    ${(props: SectionHeadlineWrapperProps) => props.appearance === 'normal' && css`
        border-bottom: 3px solid #C9C9C9;

        h2 {
            display: inline-block;
            position: relative;
            padding-bottom: 0.5rem;
            font-size: 1.8rem;
        }
    `}

    ${(props: SectionHeadlineWrapperProps) => props.appearance === 'compact' && css`
        h2 {
            font-family: 'Roboto';
            text-transform: none;
            font-style: normal;
            font-weight: medium;
            padding-bottom: 0.5rem;
            position: relative;
        }
    `}

    h2::after {
        content: '.';
        ${(props: SectionHeadlineWrapperProps) => props.appearance === 'normal' && css`
            width: 100%;
        ` }
        ${(props: SectionHeadlineWrapperProps) => props.appearance === 'compact' && css`
            width: 2.5rem;
        ` }
        border-bottom: 3px solid #FF6C38;
        color: transparent;
        position: absolute;
        left: 0;
        bottom: -3px;
    }
`