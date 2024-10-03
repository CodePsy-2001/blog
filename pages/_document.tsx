import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: '코드싸이 블로그',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8136657929424448"
          crossOrigin="anonymous"
        />
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
