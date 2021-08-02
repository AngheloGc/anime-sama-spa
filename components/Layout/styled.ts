import { createGlobalStyle } from 'styled-components'

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
        margin: 3rem auto;

        @media (max-width: 1040px) {
            margin: 2rem auto;
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
