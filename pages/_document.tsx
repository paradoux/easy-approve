import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="EasyApprove" />
        <meta
          name="description"
          content="EasyApprove is a dApp to easily approve token transfers by smart contracts on your behalf"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="EasyApprove" />
        <meta
          property="og:description"
          content="EasyApprove is a dApp to easily approve token transfers by smart contracts on your behalf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
