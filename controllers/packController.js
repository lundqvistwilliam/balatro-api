import { getAllBoosterPacks } from "../helpers/packs.js";

export const getAllPacksHandler = async (req, res) => {
  try {
    const packs = await getAllBoosterPacks();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};