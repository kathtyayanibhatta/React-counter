import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}
export default App;
