import '@/styles/globals.css'
import { Sora } from 'next/font/google';
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Loader from './loader';

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    if (loading) {
      document.querySelector('body')?.classList.add('disable-scroll');
    }
    const timer = setTimeout((() => {
      setLoading(false)
    }), 2500)
    return () => clearTimeout(timer)
  })

  return (
    <main className={sora.className}>
      <Loader loading={loading} />
      <Component {...pageProps} />
    </main>
  )
}
