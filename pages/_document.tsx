import { Html, Head, Main, NextScript } from "next/document"

export default function Document () {
  return (
    <Html>
      <Head>
        <meta name="title" content="EasyApprove"/>
        <meta name="description" content="EasyApprove is a dApp to easily approve token transfers by smart contracts on your behalf"/>

        <meta property="og:type" content="website"/>
        {/* <meta property="og:url" content="https://defibank.vercel.app/"/> */}
        <meta property="og:title" content="EasyApprove"/>
        <meta property="og:description" content="EasyApprove is a dApp to easily approve token transfers by smart contracts on your behalf"/>
        {/* <meta property="og:image" content="https://defibank.vercel.app/assets/LandingPage.png"/> */}

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://defibank.vercel.app/"/>
        <meta property="twitter:title" content="EasyApprove"/>
        <meta property="twitter:description" content="EasyApprove is a dApp to easily approve token transfers by smart contracts on your behalf"/>
        {/* <meta property="twitter:image" content="https://defibank.vercel.app/assets/LandingPage.png"/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
