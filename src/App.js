
import React from 'react';
import {useSelector} from 'react-redux';
import {increment} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
 const isLogged = useSelector(state => state.isLogged)
 const dispatch = useDispatch()
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
