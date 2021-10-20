import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SignUpForm from "../components/SignUpForm/SignUpForm.js";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function SignUp() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
