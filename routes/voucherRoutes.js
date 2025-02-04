import express from "express";
import { getAllVouchersHandler } from "../controllers/voucherController.js";

const router = express.Router();


router.get("/", (req, res, next) => {
  next();
}, getAllVouchersHandler);

export default router;