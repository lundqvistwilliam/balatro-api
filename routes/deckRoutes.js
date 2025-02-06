import express from "express";
import { getAllDecksHandler } from "../controllers/deckController.js";


const router = express.Router();

router.get("/", (req, res, next) => {
  next();
}, getAllDecksHandler);

export default router;