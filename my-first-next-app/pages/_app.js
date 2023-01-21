import './styles.css';
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-MDR9Y99KT2"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MDR9Y99KT2', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <Component {...pageProps} />
  </>
  )
}
