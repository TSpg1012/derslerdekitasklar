import React, { useRef, useState } from "react";
import axios from "axios";

function PostForm() {
  let name = useRef();
  let price = useRef();
  let stockCount = useRef();

  let [data, setData] = useState([]);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="">Name:</label>
      <input type="text" placeholder="enter the name of product" ref={name} />
      <label htmlFor="">Price:</label>
      <input
        type="number"
        placeholder="enter the price of product"
        ref={price}
      />
      <label htmlFor="">Stock Couunt:</label>
      <input
        onSubmit={(e) => {
        }}
        placeholder="enter the name of product"
        ref={stockCount}
      />
      <button
        type="submit"
        onClick={() => {
          let obj = {
            name: name.current.value,
            price: price.current.value,
            stockCount: stockCount.current.value,
            sale: true,
          };
          console.log(obj);

          axios
            .post(
              "https://6556258684b36e3a431f3560.mockapi.io/products/products",
              obj
            )
            .then((res) => {
              setData([...data, res.data]);
            });
        }}
      >
        Add
      </button>
    </form>
  );
}

export default PostForm;
