import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Button color="inherit" to="/">
            About
          </Button> */}
          <Link color="inherit" to="/signup">
            SignUp
          </Link>
          {/* <Button color="inherit" to="/login">
            Login
          </Button> */}
          <Link color="inherit" to="/profile">
            Profile
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
