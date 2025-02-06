import express from "express";
import { getAllTarotsHandler } from "../controllers/tarotController.js";

const router = express.Router();


router.get("/", (req, res, next) => {
  next();
}, getAllTarotsHandler);

export default router;