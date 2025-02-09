import express from "express";
import { getAllBlindsHandler } from "../controllers/blindsController.js";

const router = express.Router();


router.get("/", (req, res, next) => {
  next();
}, getAllBlindsHandler);

export default router;