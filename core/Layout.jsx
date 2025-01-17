import Head from 'next/head'

export function Layout ({meta, children}) {
  return (
  <div>
    <Head>
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />      
      <title>{`${meta.title } · ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
    </Head>
    {children}
  </div>
  )
}
