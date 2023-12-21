import React, { useCallback, useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

type Props = {};

function Home({}: Props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/singers").then((res) => setData(res.data));
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <br />
        <input type="text" />
        <button
          onClick={() => {
            console.log(data);
          }}
        >
          Sort by Age
        </button>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          {data &&
            data.map((elem) => {
              return (
                <Card
                  sx={{ width: 345 }}
                  onClick={() => {
                    navigate(`./singers/${elem.id}`);
                  }}
                >
                  <CardMedia
                    sx={{ height: 400 }}
                    image={elem.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {elem.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Delete</Button>
                  </CardActions>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
