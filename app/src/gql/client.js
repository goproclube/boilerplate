import { GraphQLClient, ClientContext } from 'graphql-hooks'

import Error from '@/src/libs/error'

const graphQLClient = new GraphQLClient({
  url: process.env.GRAPHQL,
  logErrors: process.env.NODE_ENV === 'development',
  onError: ({ result }) => {

    if (result.error?.graphQLErrors) {
      const [error] = result.error.graphQLErrors.map(e => (e.extensions))

      if (error?.code === '509') {
        window.location.href = process.env.APPS
      }
    }

    Error(result)
  }
})

export {
  graphQLClient, ClientContext
}