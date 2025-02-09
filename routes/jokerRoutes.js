import express from "express";
import { getAllJokersHandler, getJokerByIdHandler, getJokerByRarityHandler } from "../controllers/jokerController.js";

const router = express.Router();

// Route to get all jokers
router.get("/", (req, res, next) => {
  next();
}, async (req, res) => {
  if (req.query.rarity) {
    return await getJokerByRarityHandler(req, res);
  }
  return await getAllJokersHandler(req, res);
});

// Route to get a single joker by ID
router.get("/:joker_id", (req, res, next) => {
  next();
}, getJokerByIdHandler);

export default router;
