import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* SEO metadata */}
          <title>Your Page Title</title>
          <meta name="description" content="Your website description here" />
          <meta name="keywords" content="keyword1, keyword2, keyword3" />

          {/* Responsive meta tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Add any additional meta tags, external stylesheets, or scripts */}
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
          />
        </Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
