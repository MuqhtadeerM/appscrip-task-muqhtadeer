import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Product listing SSR page" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
