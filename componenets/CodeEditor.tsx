import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const [codeValue, setCodeValue] = useState(code);
  return (
    <>
      <div className="w-2/3">
        <Editor
          height={"100vh"}
          width={"100vw"}
          language={language}
          value={`${codeValue}\n\n`}
          theme="vs-dark"
        />
      </div>
    </>
  );
}
