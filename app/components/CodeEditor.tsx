"use client";

import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

interface CodeEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  height?: string;
  placeholder?: string;
  readOnly?: boolean;
  language?: "javascript" | "typescript";
}

export default function CodeEditor({
  value = "",
  onChange,
  height = "100vh",
  placeholder = "Type your code here...",
  readOnly = false,
}: CodeEditorProps) {
  return (
    <div className="w-full h-full" role="application" aria-label="Code Editor">
      <CodeMirror
        value={value}
        onChange={onChange}
        className="text-black"
        height={height}
        placeholder={placeholder}
        readOnly={readOnly}
        basicSetup={{
          foldGutter: true,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: true,
          lineNumbers: true,
          highlightActiveLine: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          highlightSelectionMatches: true,
        }}
        extensions={[javascript({ jsx: true, typescript: true })]}
        indentWithTab={true}
        title="E D T R"
      />
    </div>
  );
}
