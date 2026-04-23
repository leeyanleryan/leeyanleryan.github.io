import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway&display=swap" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WXMZHEF5E7"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WXMZHEF5E7');`,}} />
      </Head>
      <body className="dark-mode">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
