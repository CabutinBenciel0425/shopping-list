import Header from "./components/Header";
import List from "./components/List";
import { ItemProvider } from "./context/ItemProvider";
import { UIProvider } from "./context/UIProvider";
import "./styles.css";
import ModalRoot from "./UI/ModalRoot";

function App() {
  return (
    <ItemProvider>
      <UIProvider>
        <div className="w-[30%] h-[75%] border-black flex flex-col">
          <Header />
          <List />
          <ModalRoot />
        </div>
      </UIProvider>
    </ItemProvider>
  );
}

export default App;
