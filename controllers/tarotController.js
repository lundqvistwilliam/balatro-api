import { getAllTarots } from "../helpers/tarots.js";

export const getAllTarotsHandler = async (req, res) => {
  try {
    const packs = await getAllTarots();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
