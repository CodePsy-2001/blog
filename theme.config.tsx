import { NextraBlogTheme } from 'nextra-theme-blog'
import Utterances from '@componets/Utterances'
import { format } from 'date-fns'

const YEAR = new Date().getFullYear()

const config: NextraBlogTheme = {
  darkMode: true,
  footer: (
    <footer style={{ marginTop: '8rem' }}>
      <small>
        <time>{YEAR}</time>
        © CodePsy-2001.
        <a href="/feed.xml" style={{ float: 'right' }}>
          RSS
        </a>
      </small>
    </footer>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.title && (
        <>
          <meta property="og:title" content={meta.title} />
          <meta name="twitter:title" content={meta.title} />
        </>
      )}
      {meta.description && (
        <>
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
          <meta name="twitter:description" content={meta.description} />
        </>
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  comments: <Utterances />,
  readMore: '',
  dateFormatter: (date) => format(new Date(date), 'yyyy년 M월 d일')
  // navs: [
  //   {
  //     url: 'https://github.com/shuding/nextra',
  //     name: 'Nextra'
  //   }
  // ]
}

export default config
