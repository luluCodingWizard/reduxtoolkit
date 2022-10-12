import "./count.css";
import {
  increment,
  decrement,
  directInput,
  incrementByAmount,
} from "./countSlice";
import { useSelector, useDispatch } from "react-redux";

function Count() {
  const count = useSelector((state) => state.countSliceReducer.count);
  const dispatch = useDispatch();

  const hundleCounterInput = (e) => {
    dispatch(directInput(e.target.value));
  };
  return (
    <div className="flex">
      <button className="green" onClick={() => dispatch(decrement())}>
        -
      </button>
      <input type="number" onChange={hundleCounterInput} value={count} />
      <button className="red" onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
    </div>
  );
}

export default Count;
