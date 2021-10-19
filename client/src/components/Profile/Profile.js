import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ShowUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user").then((theUser) => {
      setUserList(theUser.data);
    });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {userList.map((user, key) => (
        <Grid
          key={key}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Item>{user.email}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{user.phoneNumber}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{user.password}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{user.retypePassword}</Item>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
