import Document, {Main, NextScript, Head, Html} from 'next/document';
import {globalStyles} from '../lib/styles';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta name="theme-color" content="#1D2758" />
                    <meta name="mobile-web-app-capable" content="yes" />

                    <meta
                        property="og:title"
                        content="Rockstar DJs | St.Louis, MO"></meta>
                    <meta property="og:url" content="https://rockstardjs.com"></meta>
                    <meta property="og:image" content="/RSDJ_Facebook_meta.png"></meta>
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />

                    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:ital,wght@1,600&display=swap" rel="stylesheet"/>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                    <style dangerouslySetInnerHTML={{__html: globalStyles}} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
