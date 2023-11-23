import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Bodyx() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [year, setYear] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          padding: "68px 0 48px",
          margin: "0 auto",
          width: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p style={{ fontSize: "60px", marginBottom: "21pxx" }}>Album Layout</p>
        <p>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <div
          className="buttons"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
        >
          <FormControl style={{ width: "100px" }}>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Year"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <MenuItem value={2000}>2000</MenuItem>
              <MenuItem value={2010}>2010</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          <Button
            variant="contained"
            onClick={(e) => {
              axios
                .get(
                  `https://www.omdbapi.com/?s=${inputValue}&apikey=8edbdd24&y=${year}`
                )
                .then((res) => {
                  setData(res.data.Search);
                  console.log(data);
                  console.log(year);
                });
            }}
          >
            Search
          </Button>
        </div>
      </div>

      <Grid container spacing={2} style={{ width: "1000px", margin: "0 auto" }}>
        {data &&
          data.map((elem) => {
            return (
              <Grid item sm={12} lg={6} xl={3}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={elem.Poster}
                    title={elem.Type}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {elem.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Year:{elem.Year}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>

      <h3 style={{ textAlign: "center", marginTop: "24px" }}>Footer</h3>
      <p style={{ textAlign: "center" }}>
        Something here to give the footer a purpose!
      </p>
      <p style={{ textAlign: "center", marginBottom: "24px" }}>
        Copyright © Your Website 2023.
      </p>
    </>
  );
}

export default Bodyx;
