import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";

export default function CodeEditor() {

  return (
    <>
      <div className="min-w-full">
        <CodeMirror
          className="shadow-lg"
          height="85vh"
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
