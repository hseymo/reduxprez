import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.name.name);
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  const stylin = {
    background: color,
  };

  return (
    <div className="Counter card" style={stylin}>
      <h1>Hello I'm the Counter Component</h1>
      <h2>Count: {count} </h2>
      <div className="container">
        <button onClick={(e) => dispatch(increment())}>Increment</button>
        <button onClick={(e) => dispatch(decrement())}>Decrement</button>
        <button onClick={(e) => dispatch(reset())}>Reset</button>
      </div>
      <h2>Color: {color} </h2>
      <h2>Name: {name} </h2>
    </div>
  );
}

export default Counter;
