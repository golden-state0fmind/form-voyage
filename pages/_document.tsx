import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head >
                <title>Form Voyage</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <meta name="theme-color" content="#fff" />
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
                />
                <meta property="og:title" content="Form Voyage" key="title" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}