import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function Categories() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div style={{ padding: "20px" }}>
      <button>
        <Link style={{ color: "black" }}>Add Category</Link>
      </button>
      <p>Categories:</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((elem) => (
              <TableRow
                key={elem.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {elem.id}
                </TableCell>
                <TableCell align="right">{elem.name}</TableCell>
                <TableCell align="right">{elem.description}</TableCell>
                <TableCell align="right">
                  {" "}
                  <button color="black">
                    <Link
                      style={{ color: "black" }}
                      to={`/categories/${elem.id}`}
                    >
                      Details
                    </Link>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Categories;
