import type { AppProps } from "next/app";

import "styles/globals.css";

function _App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default _App;
