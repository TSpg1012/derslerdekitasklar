import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function Categories() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/categories/").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <h1>Golden oreo lists</h1>
      <UnorderedList>
        {data.map((element, id) => {
          return (
            <ListItem key={uuidv4()}>
              {element.name} {element.description} <button>edit</button>{" "}
              <button
                data-id={element.id}
                onClick={(e) => {
                  let arr = [...data];
                  console.log(data.id);
                  arr = arr.filter(
                    (elem) => elem.id != e.target.getAttribute("data-id")
                  );
                  //   setData(arr);
                  //   axios.delete(
                  //     "https://northwind.vercel.app/api/products/" +
                  //       e.target.getAttribute("data-id")
                  //   );
                }}
              >
                delete
              </button>
            </ListItem>
          );
        })}
      </UnorderedList>
    </>
  );
}

export default Categories;
