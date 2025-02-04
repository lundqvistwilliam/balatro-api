import express from "express";
import { getAllJokersHandler, getJokerByIdHandler } from "../controllers/jokerController.js";

const router = express.Router();

// Route to get all jokers
router.get("/", (req, res, next) => {
  console.log("Request to /api/jokers received");
  next(); // Pass to the handler
}, getAllJokersHandler);

// Route to get a single joker by ID
router.get("/:joker_id", (req, res, next) => {
  console.log(`Request to /api/jokers/${req.params.joker_id} received`);
  next(); // Pass to the handler
}, getJokerByIdHandler);

export default router;
