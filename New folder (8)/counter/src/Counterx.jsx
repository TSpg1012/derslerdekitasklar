import React, { useReducer, useState } from "react";
import reducer from "./UseReducer/reducer";

function Counterx() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increasement
      </button>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decreasement
      </button>
    </div>
  );
}

export default Counterx;
