import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import jokerRoutes from "./routes/jokerRoutes.js";
import packRoutes from "./routes/packRoutes.js";
import voucherRoutes from "./routes/voucherRoutes.js";
import planetRoutes from "./routes/planetRoutes.js";
import tarotRoutes from "./routes/tarotRoutes.js";
import cardModifierRoutes from "./routes/cardModifierRoutes.js";
import deckRoutes from "./routes/deckRoutes.js";
import spectralRoutes from "./routes/spectralRoutes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Balatro API" });
});

app.use("/api/jokers", jokerRoutes);

app.use("/api/packs", packRoutes);

app.use("/api/vouchers", voucherRoutes);

app.use("/api/planets", planetRoutes);

app.use("/api/tarots", tarotRoutes);

app.use("/api/modifiers", cardModifierRoutes);

app.use("/api/decks", deckRoutes);
app.use("/api/spectral", spectralRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
