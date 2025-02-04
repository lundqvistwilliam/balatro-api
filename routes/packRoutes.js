import express from "express";
import { getAllPacksHandler, getPacksByCategoryHandler } from "../controllers/packController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  next();
}, async (req, res) => {
  if (req.query.category) {
    return await getPacksByCategoryHandler(req, res);
  }
  return await getAllPacksHandler(req, res);
});


export default router;
