import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {

  return (
    <Html lang="en">

      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
      <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet" />
      <link href="/css/styles.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />

        <NextScript>  </NextScript>
            
      
        <Script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous" strategy="lazyOnload"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous" strategy="lazyOnload"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js" crossorigin="anonymous" strategy="lazyOnload"></Script>
        <Script src="/js/scripts.js" strategy="lazyOnload"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous" strategy="lazyOnload"></Script>
    
      </body>
    </Html>
  )
}
