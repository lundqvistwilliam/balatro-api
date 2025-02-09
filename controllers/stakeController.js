import { getAllStakes } from "../helpers/stakes.js";

export const getAllStakesHandler = async (req, res) => {
  try {
    const packs = await getAllStakes();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
