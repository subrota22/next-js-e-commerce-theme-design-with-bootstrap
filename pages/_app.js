

import '@/styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return <>
  <Head>
  <link rel="icon" href="https://i.ibb.co/VgwScsM/Ecommercial-Logo.png" />
  </Head>
   <Component {...pageProps}></Component>
  </>
}
