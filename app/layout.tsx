import { Footer, Layout, Navbar } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import 'nextra-theme-blog/style.css'
import '../styles.css'

export const metadata: Metadata = {
  title: '코드싸이 블로그',
  openGraph: {
    siteName: '코드싸이 블로그',
    images: ['/assets/og-image.png']
  },
  metadataBase: new URL('https://codepsy2001.blog'),
  robots: 'follow, index',
  alternates: {
    canonical: './'
  }
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" suppressHydrationWarning>
    <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }}>
      <link
        rel="preload"
        href="/fonts/Inter-roman.latin.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
      <meta name="google-adsense-account" content="ca-pub-8136657929424448" />
    </Head>
    <body>

    <Layout nextThemes={{ forcedTheme: 'dark' }}>
      <Navbar
        navs={[
          { url: '/posts', name: '게시글' },
          { url: '/', name: '소개' }
        ]}
      >
      </Navbar>
      {children}
      <Footer>
        <time>{new Date().getFullYear()}</time>
        © CodePsy-2001.
      </Footer>
    </Layout>
    </body>
    </html>
  )
}