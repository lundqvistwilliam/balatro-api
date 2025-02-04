import express from "express";
import { getAllJokersHandler, getJokerByIdHandler } from "../controllers/jokerController.js";

const router = express.Router();

// Route to get all jokers
router.get("/", (req, res, next) => {
  next();
}, getAllJokersHandler);

// Route to get a single joker by ID
router.get("/:joker_id", (req, res, next) => {
  next();
}, getJokerByIdHandler);

export default router;
