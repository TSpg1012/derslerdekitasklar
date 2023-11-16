import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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
} from "@chakra-ui/react";

function Tablex() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6556258684b36e3a431f3560.mockapi.io/products/products")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Sale</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((element) => {
              //   if (element.stockCount < 10) {
              return (
                <Tr
                  color={element.stockCount < 10 ? "red" : "black"}
                  bg={element.sale ? "green" : "white"}
                  key={uuidv4()}
                >
                  <Td>{element.price}</Td>
                  <Td>{element.id}</Td>
                  <Td>{element.name}</Td>
                  <Td>{element.stockCount}</Td>
                  <Td>{element.sale ? "true" : "false"}</Td>
                  <Td>
                    <button>Edit</button>
                  </Td>
                  <Td>
                    <button>Delete</button>
                  </Td>
                </Tr>
              );
              //   }
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tablex;
