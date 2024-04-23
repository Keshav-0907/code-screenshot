import { useRef } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import { themes } from "./utils/options";
import useStore from "./utils/store";
import Sidebar from "./components/Sidebar";

function App() {
  const state = useStore((state) => state);

  const showBackground = state.showBackground;
  const theme = state.theme;
  const fontSize = state.fontSize;
  const fontFamily = state.fontFamily;
  const padding = state.padding;
  const language = state.language;
  const editorRef = useRef(null);

  console.log(padding)


  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center p-10">
      <div
        className={` overflow-hidden transition-all ease-out w-4/6 ${showBackground ? themes[theme].background : ""} p-10`}
        ref={editorRef}
      >
        <CodeEditor />
      </div>
      <div className="ml-4 w-2/6 h-full">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
