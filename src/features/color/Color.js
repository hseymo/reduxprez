import { useSelector, useDispatch } from 'react-redux';
import {changeColor, resetColor} from './colorSlice'

function Color() {
  const color = useSelector(state => state.color.color)
  const count = useSelector(state => state.counter.count)
  const name = useSelector(state => state.name.name)
  const dispatch = useDispatch();

  const stylin = {
    background: color
  }
  
  return (
    <div className="Color card" style={stylin}>
      <h1>Hello I'm the Color Component</h1>
      <h2>Your Selected Color: {color} </h2>
      <div className="container">
        <div className='formGroup'>
        <label htmlFor="color">Pick a color:</label>
        <input
          type="color"
          name="color"
           value={color} 
           onChange={(e) => dispatch(changeColor(e.target.value))}
        />
        </div>
        <button 
            onClick={() => dispatch(resetColor())}
        >Reset</button>
      </div>
      <h2>Count: {count} </h2>
      <h2>Name: {name} </h2>
    </div>
  );
}

export default Color;
