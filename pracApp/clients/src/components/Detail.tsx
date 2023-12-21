import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type Props = {};

function Detail({}: Props) {
  const [singer, setSinger] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/singers/${id}`)
      .then((res) => setSinger(res.data));
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <p>{singer.name}</p>
      </div>
    </>
  );
}

export default Detail;
