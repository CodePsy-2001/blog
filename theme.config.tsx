// 마이그레이션을 위해 남겨둠. 실제 동작은 없음.

const config = {
  head: ({ title, meta }: any) => (
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
  )
}

export default config
