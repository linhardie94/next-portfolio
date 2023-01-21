import './styles.css';
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script
      strategy = 'lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=G-MDR9Y99KT2`}
    />

    <Script 
      strategy='lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MDR9Y99KT2');`
        }
    </Script>
    <Component {...pageProps} />
  </>
  )
}
