import useSWR from 'swr'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import Meta from '../meta'
import { GlobalStyles } from './styled'
import { request } from 'graphql-request'
import { GoogleAnalytics } from '../../common/GoogleAnalytics'

const handleFetch = query => request('https://animesama.info/graphql', query)

export default function Layout({ children }) {
    const { data, error } = useSWR(`{
    popular: popularPosts(first: 4) {
        edges {
            node {
                title
                slug
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }}`, handleFetch, { revalidateOnFocus: false })

    return (
        <div>
            <GlobalStyles />
            <Meta />
            <GoogleAnalytics />
            <Header />
            {children}
            {!error && data && <Footer popularPosts={data?.popular.edges} />}
            {/* <RadioAnimexStickyWindow /> */}
        </div>
    )
}