import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Geo selector</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="description" content="Geography selector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
