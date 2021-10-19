import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import axios from "axios";

export default function ShowUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user").then((theUser) => {
      setUserList(theUser.data);
    });
  }, []);

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-name" label="Name" value={user.email} />
        <TextField id="outlined-name" label="Name" value={name} />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
        />
      </Box>
    </Container>
  );
}
