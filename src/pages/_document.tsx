import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const HtmlWithAttributes = Html as any;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <HtmlWithAttributes lang="en" replace-scrollbar="null">
        <Head>
          <link rel="icon" href="/favicon.ico" />
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
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
          <meta charSet="UTF-8"/>
          <meta name="description" content="David McNamee's Portfolio"/>
          <meta name="keywords" content="Software Engineer, Python, C++, Rust, Go, Java, JavaScript, Typescript, Intern"/>
          <meta name="author" content="David McNamee"/>
          <meta property="og:image" content="/site-preview.png" />
          <meta property="og:description" content="David McNamee's portfolio site" />
          <meta property="og:url" content="https://da.vidmcnam.ee" />
          <meta property="og:title" content="David McNamee" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </HtmlWithAttributes>
    );
  }
}

export default MyDocument;
