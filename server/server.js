//express
const express = require("express");
//mongo database
const db = require("./config/connection");
//sets up port
const PORT = process.env.PORT || 3001;
//express
const app = express();

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
