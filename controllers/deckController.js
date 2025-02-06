import { getAllDecks } from "../helpers/decks.js";

export const getAllDecksHandler = async (req, res) => {
  try {
    const packs = await getAllDecks();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
