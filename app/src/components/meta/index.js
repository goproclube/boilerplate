import Head from 'next/head'

const Meta = (props) => {

  return (
    <Head>
      <title>{props.title}</title>

      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />

      <meta name="keywords" content="upsports, bets" />

      <meta charSet="utf-8" />
      <meta name="author" content="UPSPORTS" />

      <meta itemProp="name" content={props.title} />
      <meta itemProp="description" content={props.description} />
      <meta itemProp="image" content="/up.jpeg" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />

      <meta property="og:image" content="/up.jpeg" />

      <meta name="robots" content="index, follow" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )

}
export default Meta