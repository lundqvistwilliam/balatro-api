import express from "express";
import { getAllSpectralHandler } from "../controllers/spectralController.js";

const router = express.Router();


router.get("/", (req, res, next) => {
  next();
}, getAllSpectralHandler);

export default router;