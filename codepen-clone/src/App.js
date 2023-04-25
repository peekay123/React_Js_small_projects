import { Code } from "./components/Code";
import { Header } from "./components/Header";
import DataProvider from "./components/context/DataProvider";
import { Result } from "./components/Result";

function App() {
  return (
    <DataProvider>
      <Header/>
      <Code/>
      <Result/>
    </DataProvider>
  );
}

export default App;
