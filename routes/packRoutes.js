import express from "express";
import { getAllPacksHandler } from "../controllers/packController.js";

const router = express.Router();

// Route to get all packs
router.get("/", (req, res, next) => {
  console.log("Request to /api/packs received");
  next();
}, getAllPacksHandler);


export default router;
