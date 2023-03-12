import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head> 
 
          <meta name="facebook-domain-verification" content="5ot4ibwaxwvtv091e5yyxp73emvan4" />
    
         {/* <meta httpEquiv='refresh' content="0;URL=https://shope.ee/99rWrDOsDK"></meta> */}
          {/* <NextScript id="facebook-pixel">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '6580567968638473');
fbq('track', 'PageView');
            `}
          </NextScript> */}



        <script
           dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '6580567968638473');
fbq('track', 'PageView');
            `
          }}
        />
        <noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=6580567968638473&ev=PageView&noscript=1"
/></noscript>

        </Head>
       
      </Html>
    );
  }
}

export default MyDocument;
