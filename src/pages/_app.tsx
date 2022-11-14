import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/reactIcon512.png" />
        <link rel="apple-touch-icon" href="/img/reactIcon512.png" />
        <meta
          name="description"
          content="A simple project starter worker with Typescript"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
