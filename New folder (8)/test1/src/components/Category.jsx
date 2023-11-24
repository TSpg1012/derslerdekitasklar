import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Category() {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [data, setData] = useState([]);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={name}
        placeholder="enter the name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={description}
        placeholder="Enter the description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          let obj = {
            name: name,
            description: description,
          };
          setName("");
          setDescription("");
          axios
            .post("https://northwind.vercel.app/api/categories/", obj)
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

export default Category;
