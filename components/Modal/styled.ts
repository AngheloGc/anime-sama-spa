import styled, { css } from 'styled-components'

interface ModalWrapperProps {
    show?: boolean
}

export const ModalWrapper = styled.div`
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    padding: 2rem;
    z-index: 200;
    box-sizing: border-box;
    display: grid;
    place-items: center;

    ${(props: ModalWrapperProps) => !props.show && css`
        height: 0;
        width: 0;
        visibility: hidden;
        z-index: -100;
        padding: 0;
    `}
`

export const ModalContent = styled.div`
`