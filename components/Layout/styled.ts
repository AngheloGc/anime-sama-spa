import styled from 'styled-components'

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