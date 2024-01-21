import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  const [count,setcount]=useState(0)
  return (
    <div className="App">
      <div data-testid="counter">
        <Counter count={count} setcount={setcount} />
      </div>
    </div>
  );
}

export default App;
