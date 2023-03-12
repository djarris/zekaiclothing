import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head> 
          <meta httpEquiv='refresh' content="0;URL=https://www.facebook.com/"></meta>
        </Head>
       
      </Html>
    );
  }
}

export default MyDocument;
