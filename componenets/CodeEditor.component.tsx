import React, { useRef, useEffect, MutableRefObject } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror";

export default function CodeEditorComponent() {
  const editor =  useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startState = EditorState.create({
      doc: "Hello World",
      extensions: [basicSetup],
    });

    if(editor && editor.current) {
        const view = new EditorView({ state: startState, parent: editor.current });

        return () => {
        view.destroy();
        };
    }
  }, []);

  return (
    <>
      <div>
        <div ref={editor} className="bg-gray-100 h-screen"></div>
      </div>
    </>
  );
}
