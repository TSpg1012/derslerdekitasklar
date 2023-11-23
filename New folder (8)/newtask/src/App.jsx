import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          axios
            .get(`https://api.github.com/users/${inputValue}`)
            .then((res) => {
              setData(res.data);
              console.log(res.data);
            });
        }}
      >
        Search
      </button>

      <Card>
        <CardBody>
          <Text>{data?.login}</Text>
          <Text>{data?.id}</Text>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
