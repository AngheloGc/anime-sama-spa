
import { RadioAnimexStickyWindow } from '../../common/RadioAnimex'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import Meta from '../meta'
import { GlobalStyles } from './styled'

interface LayoutProps {
    footerPosts: any
}

export const Layout: React.FC<LayoutProps> = ({ children, footerPosts }) => {
    return (
        <div>
            <GlobalStyles />
            <Meta />
            <Header />
            {children}
            <Footer popularPosts={footerPosts} />
            <RadioAnimexStickyWindow />
        </div>
    )
}