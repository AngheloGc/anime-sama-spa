
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { GlobalStyles } from './styled'

interface LayoutProps {
    footerPosts: any
}

export const Layout: React.FC<LayoutProps> = ({ children, footerPosts }) => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            {children}
            <Footer popularPosts={footerPosts} />
        </div>
    )
}