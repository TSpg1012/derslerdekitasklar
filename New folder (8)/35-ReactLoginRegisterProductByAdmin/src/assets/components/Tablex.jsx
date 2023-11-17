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
  SimpleGrid,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

function Tablex({ setAdmin, admin }) {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6556258684b36e3a431f3560.mockapi.io/products/products")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(admin);
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {data.map((element) => {
          return (
            <Card key={uuidv4()}>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{element.name}</Heading>
                  <Text>Stock count: {element.stockCount}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${element.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter display="flex" justifyContent="space-between">
                <ButtonGroup spacing="10
                
                
                ">
                  <Button variant="solid" colorScheme="red" color="white">
                    &#128722; Add to card
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    &#11088; add to wishlist
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default Tablex;
