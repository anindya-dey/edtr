import Head from "next/head";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>E D T R</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col align-center min-h-screen mx-52 w-auto">
        <header className="text-center" />
        <main className="items-center justify-center">{children}</main>
        <footer className="text-center" />
      </div>
    </>
  );
}
