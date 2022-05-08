import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

import StatusBar from "../components/StatusBar";

import "../styles/globals.css";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>chat-app</title>
      </Head>
      <main>
        <GlobalStyle />
        <StatusBar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
        <div id="no-mobile">화면 크기를 줄여주세요!</div>
      </main>
    </>
  );
}

export default MyApp;
