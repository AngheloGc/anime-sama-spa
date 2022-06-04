import request from 'graphql-request'

export default function useFetch() {

  const handleFetch = (query: string) => request('https://animesama.info/graphql', query)

  return { handleFetch }

}