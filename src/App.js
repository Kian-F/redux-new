
import React from 'react';
import {useSelector} from 'react-redux';
import {decrement, increment} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
 const isLogged = useSelector(state => state.isLogged)
 const dispatch = useDispatch()
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
