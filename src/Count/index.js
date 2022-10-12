import "./count.css";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex">
      <button className="green" onClick={decrement}>
        -
      </button>
      <input type="number" value={count} />
      <button className="red" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Count;
