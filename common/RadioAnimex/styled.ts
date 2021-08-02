import styled from 'styled-components'

export const RadioAnimexWrapper = styled.div`
    position: sticky;
    bottom: 0;
    height: auto;
    width: 100%;
    z-index: 200;
    background-color: rgba(0,0,0,0.6);
    overflow: hidden;
    box-shadow: 0 0 10px gray;

    .blink-2 {
        -webkit-animation: blink-2 1.5s infinite both;
                animation: blink-2 1.5s infinite both;
                color: red;
    }

    audio {
        height: 1px;
    }
`

export const RadioAnimexBackground = styled.div`
    background-image: url('/images/radio-animex-logo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 35%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(14px);
    transform: scale(130%);

    &::after {
        content: ".";
        color: transparent;
        background-color: rgba(0,0,0,.55);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const RadioAnimexContent = styled.div`
    position: relative;
    z-index: 220;
    width: 100%;
    max-width: 1040px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 0;

    @media (max-width: 1040px) {
        padding: 2rem;
    }
`

export const RadioAnimexContentImage = styled.img`
    height: 3.5rem;
    width: 3.5rem;
    object-fit: cover;
    border-radius: 4px;
    position: relative;
    z-index: 220;
`

export const RadioAnimexContentInfoPlayer = styled.div`
    position: relative;
    top: 0.75rem;

    @-moz-document url-prefix() {
        top: 1.25rem;
    }
`

export const RadioAnimexContentInfo = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1040px) {
        flex-direction: column;
    }
`

export const RadioAnimexContentInfoTitle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1rem;

    h3 {
        margin: 0 0.5rem;
    }
`