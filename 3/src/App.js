import './App.css';
import Header from "./Components/Cit/Header/index.js";
import Middle from "./Components/Cit/Header/index2.js";
import Text from "./Components/Cit/Header/text.js";
import Table from "./Components/Cit/Header/table.js";
import "./Components/Cit/Header/color.css";

function App() {
  return (
    <div className="App">
      <div class='color'>
        <Header />
        <Middle />
        <Text />
        <Table />
      </div>
    </div>
  );
}

export default App;