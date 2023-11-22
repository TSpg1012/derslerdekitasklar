import React, { useEffect, useState } from "react";
import axios from "axios";

function datafetch(url, method) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (method == "get") {
      axios 
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err)=>{
          setError(err)
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default datafetch;
