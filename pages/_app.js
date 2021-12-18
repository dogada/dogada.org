import TagManager from "react-gtm-module"
import "bootswatch/dist/litera/bootstrap.min.css"
//import "../styles/index.scss"

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GTM_ID) {
  TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
}

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
