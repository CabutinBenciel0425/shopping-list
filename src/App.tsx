import Header from "./components/Header";
import List from "./components/List";
import { ItemProvider } from "./context/ItemProvider";
import "./styles.css";

function App() {
  return (
    <ItemProvider>
      <div className="w-[30%] h-[75%] border-black flex flex-col">
        <Header />
        <List />
      </div>
    </ItemProvider>
  );
}

export default App;
