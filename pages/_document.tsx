import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "코드싸이 블로그",
    description: "프로그래밍, 심리학, 문화/예술 이야기",
    image: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/*<meta name="twitter:card" content="summary_large_image" />*/}
        {/*<meta name="twitter:site" content="@yourname" />*/}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
