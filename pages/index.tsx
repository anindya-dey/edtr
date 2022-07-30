import React from "react";
import type { NextPage } from "next";
import { CodeEditor, Layout } from "../componenets";

const Home: NextPage = () => {
  return (
    <Layout>
      <CodeEditor language="javascript" code="// Your code goes here..." />
    </Layout>
  );
};

export default Home;
