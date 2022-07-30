import { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>E D T R</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center w-full">
        <header></header>

        <main>{children}</main>

        <footer></footer>
      </div>
    </>
  );
}
