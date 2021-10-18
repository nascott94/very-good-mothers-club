import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

app.use(bodyParser.json({ limit: "20md", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20md", extended: true }));

app.use(cors());

//express
const app = express();

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
