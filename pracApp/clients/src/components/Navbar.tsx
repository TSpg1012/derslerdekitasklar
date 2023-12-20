import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spotify App
          </Typography>
          <Link to="/">
            <Button style={{ color: "white" }}>Home</Button>
          </Link>
          <Link to="/add">
            <Button style={{ color: "white" }}>Add</Button>
          </Link>
          <Link to="/singers">
            <Button style={{ color: "white" }}>Singers</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
