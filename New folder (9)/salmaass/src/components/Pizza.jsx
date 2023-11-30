import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToppings, Delete, LetHimCook } from "../redux/slices/AddPizza";
function Pizza() {
  let inp = useRef("");
  const dispatch = useDispatch();
  const toppings = useSelector((state) => state.pizza.toppings);
  const isGlutten = useSelector((state) => state.pizza.isGlutten);
  const pizzas = useSelector((state) => state.pizza.pizza);
  console.log(pizzas);
  let [glut, setGlut] = useState(isGlutten);
  return (
    <div>
      <h1>Pizza</h1>
      <ul>
        {toppings &&
          toppings.map((elem, i) => {
            return (
              <li key={elem.id}>
                {elem.title}
                <button
                  onClick={() => {
                    dispatch(Delete(elem.id));
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
      <p>IsGlutten {glut ? "true" : "false"}</p>
      <input type="text" ref={inp} />
      <button
        onClick={() => {
          if (toppings.find((elem) => elem.title == inp.current.value)) {
            window.alert("bu element daxil olunub");
          } else {
            dispatch(AddToppings(inp.current.value));
            inp.current.value = "";
          }
          inp.current.value = "";
        }}
      >
        Add
      </button>
      <br />
      <button
        onClick={() => {
          setGlut(!glut);
        }}
      >
        toggle glutten
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(LetHimCook());
        }}
      >
        Let him cook &#128293;
      </button>
      <hr />
      <ul>
        {pizzas &&
          pizzas.map((pizza, idx) => {
            return (
              <li key={idx}>
                <ul>
                  {pizza.newToppings.map((topping, idx) => {
                    return <li key={idx}>{topping.title}</li>;
                  })}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Pizza;
