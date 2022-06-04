import he from 'he'

export const useExcerpt = () => {
  const handleExcerpt = (excerpt: string) => {
    const stripedHTML = excerpt.replace(/<[^>]+>/g, '')
    const decodedStripedHTML = he.decode(stripedHTML)
    return decodedStripedHTML
  }

  return { handleExcerpt }
}
