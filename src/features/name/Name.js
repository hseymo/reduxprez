import { useSelector, useDispatch } from 'react-redux';
import { updateName } from './nameSlice';
import { useState } from 'react';

function Name() {
  const name = useSelector(state => state.name)
  const count = useSelector(state => state.counter.count)
  const color = useSelector(state => state.color.color)
  const dispatch = useDispatch();
  const [fullname, setFullName] = useState({
    first: '',
    last: ''
  })

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateName(fullname))
    setFullName({
      first:'',
      last: ''
    })
  }

  const stylin = {
    background: color
  }

  return (
    <div className="Name card" style={stylin}>
      <h1>Hello I'm the Name Component</h1>
      <h2>Name: {name.first} {name.last} </h2>

      <form
        className="container"
          onSubmit={onFormSubmit}
      >
        <div className="formGroup">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="input"
            name="firstName"
            value={fullname.first} 
            onChange={(e) => setFullName({...fullname, first: e.target.value})}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="input"
            name="lastName"
            value={fullname.last} 
            onChange={(e) => setFullName({...fullname, last: e.target.value})}
          />
        </div>
        <button>Submit</button>
      </form>
      <h2>Color: {color} </h2>
      <h2>Count: {count} </h2>
    </div>
  );
}

export default Name;
