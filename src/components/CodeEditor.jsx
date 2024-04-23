import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Editor from "react-simple-code-editor";
import { codeSnippets } from "@/utils/options";
import hljs from "highlight.js";
import useStore from "@/utils/store";

const CodeEditor = () => {
  const [fileName, setFileName] = useState("Untitled");
  const state = useStore((state) => state);

  console.log(state);

  return (
    <div className="text-white bg-black p-2 border-[1px] border-gray-700 rounded-lg">
      <div className="flex items-center justify-between px-1">
        <div className="flex gap-2">
          <div className="h-4 w-4 bg-red-600 rounded-full"></div>
          <div className="h-4 w-4 bg-yellow-600 rounded-full"></div>
          <div className="h-4 w-4 bg-green-600 rounded-full"></div>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="bg-black text-white rounded-lg text-center focus:outline-none p-1"
            placeholder="File Name"
          />
        </div>
        <div>
          {" "}
          <ChevronDown strokeWidth={1} />{" "}
        </div>
      </div>
      <Editor
      className=""
        value={codeSnippets[0].code}
        onValueChange={(code) => console.log(code)}
        highlight={(code) =>
          hljs.highlight(code, { language: state.language }).value
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          color: "#D4D4D4",
          border: "none",
          outline: "none",
          width: "100%",
          height: "80vh",
        }}
      />
    </div>
  );
};

export default CodeEditor;
