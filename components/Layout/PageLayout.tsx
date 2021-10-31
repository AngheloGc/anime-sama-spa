import { PageLayoutPosts, PageLayoutSidebar, PageLayoutWrapper } from './styled'

export default function PageLayout({ children }) {
  return (
    <PageLayoutWrapper>
      <PageLayoutPosts>
        {children}
      </PageLayoutPosts>
      <PageLayoutSidebar />
    </PageLayoutWrapper>
  )
}

