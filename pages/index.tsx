import React, { useRef, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror";

const Home: NextPage = () => {
  const editor = useRef();

  useEffect(() => {
    const startState = EditorState.create({
      doc: "Hello World",
      extensions: [basicSetup],
    });

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Head>
        <title>edtr | Online Code Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-2/3 h-full">
        <div className="bg-violet-700 text-white text-center">HEADER</div>
        <div ref={editor} className="bg-gray-100 h-screen"></div>
        <div className="bg-violet-100">FOOTER</div>
      </div>
    </div>
  );
};

export default Home;
