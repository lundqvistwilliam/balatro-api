import express from "express";
import { getAllPlanetsHandler } from "../controllers/planetController.js";

const router = express.Router();


router.get("/", (req, res, next) => {
  next();
}, getAllPlanetsHandler);

export default router;