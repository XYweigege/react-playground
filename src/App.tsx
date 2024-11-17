import ReactPlayground from "./pages/ReactPlayground/index";
import "./App.scss";
import { PlaygroundProvider } from "./pages/ReactPlayground/PlaygroundContext";

function App() {
  return (
    <PlaygroundProvider>
      <ReactPlayground />
    </PlaygroundProvider>
  );
}

export default App;
