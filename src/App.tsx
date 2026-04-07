import Header from "./components/Header";
import List from "./components/List";
import "./styles.css";

function App() {
  return (
    <div className="w-[25%] h-[75%] border-black flex flex-col">
      <Header />
      <List />
    </div>
  );
}

export default App;
