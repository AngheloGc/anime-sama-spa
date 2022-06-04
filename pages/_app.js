import '../public/styles/nprogress.css'
import '../public/fonts/stylesheet.css'
import Router from 'next/router'
import getConfig from 'next/config'
import NProgress from 'nprogress'
import Layout from '../components/Layout/Layout'
import { createGlobalStyle } from 'styled-components'

const { publicRuntimeConfig } = getConfig()

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner })

Router.onRouteChangeStart = () => NProgress.start()

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp


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
