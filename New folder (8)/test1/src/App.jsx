import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./components/Categories";
import Category from "./components/Category";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ChakraProvider,
} from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Categories />
      <Category />
    </ChakraProvider>
  );
}
// function App() {
//   let [data, setData] = useState([]);

//   useEffect(() => {
//     axios("https://northwind.vercel.app/api/products/").then((res) => {
//       console.log(res.data);
//       setData(res.data);
//     });
//   }, []);
// }

export default App;
