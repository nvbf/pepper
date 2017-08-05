import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    // const sheet = new ServerStyleSheet();
    // const main = sheet.collectStyles(<Main />);
    const main = <Main />;
    // const styleTags = sheet.getStyleElement();
    return (
      <html lang="no">
        <Head>
          <title>Pepper</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
          {/* styleTags */}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
