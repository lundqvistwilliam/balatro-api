import express from "express";
import { getAllCardModifiersHandler } from "../controllers/cardModifierController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  next();
}, getAllCardModifiersHandler);

export default router;