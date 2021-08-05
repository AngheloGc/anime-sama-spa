import '../public/styles/nprogress.css'
import '../public/fonts/stylesheet.css'
import Router from 'next/router'
import getConfig from 'next/config'
import NProgress from 'nprogress'
import Layout from '../components/Layout/Layout'

const { publicRuntimeConfig } = getConfig()

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner })

Router.onRouteChangeStart = () => NProgress.start()

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
