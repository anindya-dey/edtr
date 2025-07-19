import React from "react";
import type { NextPage } from "next";
import { CodeEditor, Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <CodeEditor />
    </Layout>
  );
};

export default Home;
