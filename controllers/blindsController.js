import { getAllBlinds } from "../helpers/blinds.js";

export const getAllBlindsHandler = async (req, res) => {
  try {
    const packs = await getAllBlinds();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
