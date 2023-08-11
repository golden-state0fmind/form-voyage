// These styles apply to every route in the application
import '@/app/globals.css'
import { store } from '@/app/store/store'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
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
            <Component {...pageProps} />
        </Provider>
    )
}