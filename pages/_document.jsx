import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link href="/fonts/jwf-book.woff2" as="font" type="font/woff2" />
          <link
            href="/fonts/jwf-bookitalic.woff2"
            as="font"
            type="font/woff2"
          />
          <link href="/fonts/jwf-ultra.woff2" as="font" type="font/woff2" />

          <link
            rel="stylesheet"
            href="https://www.jason.af/styles/global.css"
          />

          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://www.jason.af/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://www.jason.af/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://www.jason.af/favicon-16x16.png"
          />
          <link rel="manifest" href="https://www.jason.af/site.webmanifest" />
          <link
            rel="mask-icon"
            href="https://www.jason.af/safari-pinned-tab.svg"
            color="#ff87d4"
          />
          <meta name="msapplication-TileColor" content="#ffe742" />
          <meta name="theme-color" content="#ffe742" />

          <link rel="canonical" href="https://jason.af/" />
          <meta
            name="description"
            content="Jason Lengstorf works at Netlify and hosts Learn With Jason. He is trying his very best to follow his own advice. He lives in Portland, Oregon."
          />
          <meta
            name="image"
            content="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_1200/v1593579116/jason.af/og-image.jpg"
          />
        </Head>
        <body
          data-kontent-project-id={process.env.KONTENT_PROJECT_ID}
          data-kontent-language-codename="default"
        >
          <Main />
          <NextScript />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.10.0/matter.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
          <script src="/home.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
