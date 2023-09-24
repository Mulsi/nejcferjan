import '@/styles/globals.css'
import { Sora } from 'next/font/google';
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from "next/head";

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {

  return (

    <main className={sora.className}>
      <Head>
        <title>Nejc Ferjan | Photography</title>
        <meta name="description" content="Explore Nejc Ferjan's photography portfolio. Discover the world through his lens and witness the beauty of life in every frame." key="desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VWQFCEXEPZ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VWQFCEXEPZ');
        `}
        </Script>
      </>
      <Component {...pageProps} />
    </main>
  )
}
