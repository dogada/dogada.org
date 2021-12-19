import Document, { Html, Head, Main, NextScript } from "next/document"

class AppDocument extends Document {
  render(props) {
    // console.log('AppDoc.render')
    // TODO: set lang for current i18n lang
    console.log("AppDoc.render", props)
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="_doc">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
