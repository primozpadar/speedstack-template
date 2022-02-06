import withApollo from 'next-with-apollo'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default withApollo(
  ({ initialState, ctx }) => {
    return new ApolloClient({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        cookie: (typeof window === 'undefined' ? ctx?.req?.headers.cookie : undefined) || '',
      },
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  },
)
