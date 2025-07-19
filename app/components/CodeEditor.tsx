"use client";

import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";

export default function CodeEditor() {

  return (
    <>
      <div className="min-w-full">
        <CodeMirror
          className="text-black"
          height="100vh"
          placeholder={"Type your code here..."}
          basicSetup={{
            foldGutter: false,
            dropCursor: false,
            allowMultipleSelections: false,
            indentOnInput: false,
          }}
          extensions={[langs.javascript()]}
          indentWithTab={true}
          title={"E D T R"}
        />
      </div>
    </>
  );
}
