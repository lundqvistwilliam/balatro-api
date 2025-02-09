import express from "express";
import { getAllStakesHandler } from "../controllers/stakeController.js";

const router = express.Router();


router.get("/", (req, res, next) => {
  next();
}, getAllStakesHandler);

export default router;