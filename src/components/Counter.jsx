import { useReducer } from "react";
import { initialState, reducer } from "./components/Reducer";
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count Value: {state}</p>
      <button onClick={()=> dispatch({type: 'INC'})}>Increment</button>
      <button onClick={()=> dispatch({type: 'DEC'})}>Decrement</button>
      <button onClick={()=> dispatch({type: 'INCBY5', payload: 5})}>Increment by 5</button>
    </>
  )
}

export default Counter;