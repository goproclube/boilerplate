import '@/src/styles/globals.css'

import { Fragment } from 'react'

import { graphQLClient, ClientContext } from '@/src/gql/client'

import { ToastContainer } from 'react-toast'

import StoreProvider from '@/src/contexts/store'

import Meta from '@/src/components/meta'

const App = ({ Component, pageProps }) => {

  const Layout = Component.Layout ? Component.Layout : Fragment

  return (

    <ClientContext.Provider value={graphQLClient}>
      <Meta title="BOILERPLATE" description="" />

      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>

      <ToastContainer position="bottom-center" delay={2400} />
    </ClientContext.Provider>

  )
}

export default App
