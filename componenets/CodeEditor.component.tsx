import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditorComponent({ language, code }: { language: string, code: string }) {
  const [ codeValue, setCodeValue ] = useState(code || "");
  return (
    <>
      <Editor
        height={"85vh"}
        width={"100%"}
        language={language || "javascript"}
        value={`${codeValue}\n\n`}
        theme="vs-dark"
      />
    </>
  );
}
