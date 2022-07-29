import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { CodeEditorComponent } from "../componenets";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Head>
        <title>edtr | Online Code Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-2/3 h-full">
        <div className="bg-violet-700 text-white text-center">HEADER</div>
        <CodeEditorComponent />
        <div className="bg-violet-100">FOOTER</div>
      </div>
    </div>
  );
};

export default Home;
