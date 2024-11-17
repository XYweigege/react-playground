import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Header from "./components/Header/index";
import CodeEditor from "./components/CodeEditor/index";
import Preview from "./components/Preview/index";
import "./index.scss";
import { useContext } from "react";
import { PlaygroundContext } from "./PlaygroundContext";
export default function ReactPlayground() {
  const { theme, setTheme } = useContext(PlaygroundContext);
  return (
    <div style={{ height: "100vh" }} className={theme}>
      <Header />
      <Allotment defaultSizes={[100, 100]}>
        <Allotment.Pane minSize={0}>
          <CodeEditor />
        </Allotment.Pane>
        <Allotment.Pane minSize={0}>
          <Preview />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
