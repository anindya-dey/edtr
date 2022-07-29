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

      <CodeEditorComponent />
    </div>
  );
};

export default Home;
