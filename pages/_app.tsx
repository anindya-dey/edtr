import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../componenets";

function Edtr({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Edtr;
