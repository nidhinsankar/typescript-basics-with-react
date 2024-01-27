import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  changeIncrementAmount,
  decrement,
  increment,
} from "../store/counterSlice";
import { useRef } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const IncreaseBtn = () => {
    dispatch(increment());
  };

  const DecreaseBtn = () => {
    dispatch(decrement());
  };

  const ChangeIncrementCount = () => {
    dispatch(changeIncrementAmount(Number(inputRef.current?.value)));
  };
  console.log(inputRef?.current);

  return (
    <div>
      <h2>Counter - {count}</h2>
      <input
        type="number"
        ref={inputRef}
        value={inputRef.current?.value}
        name="incrementCount"
        id="increment"
      />
      <button onClick={ChangeIncrementCount}>Change</button>
      <div>
        <button onClick={DecreaseBtn}>Decrease</button>
        <button onClick={IncreaseBtn}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;
