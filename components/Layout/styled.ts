import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    p, ul, h1,h2, h3, h4, h5, h6 {
        margin: 0;
    }

    main {
        max-width: 1040px;
        margin: 3rem auto 5rem;

        @media (max-width: 1040px) {
            margin: 2rem auto 3rem;
        }
    }

    /*Animations*/
    @-webkit-keyframes blink-2 {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes blink-2 {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
        }
        100% {
          opacity: 1;
        }
    }
`

export const PageLayoutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 12.5rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 0;
`

export const PageLayoutPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const PageLayoutSidebar = styled.div``