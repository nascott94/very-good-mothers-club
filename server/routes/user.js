import express from "express";
import { getUser, createUser } from "../controllers/user.js";
import user from "../models/user.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);

export default router;
