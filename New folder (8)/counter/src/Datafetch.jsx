import React from "react";
import useFetch from "./UseReducer/useFetch";

function Datafetch() {
  let { data, loading, error } = useFetch(
    "https://6556258684b36e3a431f3560.mockapi.io/products/products",
    "get"
  );

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {loading ? (
          "loading"
        ) : error ? (
          <li>{error}</li>
        ) : (
          data.map((elem, i) => {
            return <li key={i}>{elem.name}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default Datafetch;
