import "./App.css";

import Card from "./Components/Card";

import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  // axios.post("/addCoffee", {});

  return (
    <div className="App">
      <header className="App-header">
        <Card />

        <button>Add Coffee</button>
      </header>
    </div>
  );
}

export default App;
