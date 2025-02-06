import { getAllCardModifiers } from "../helpers/cardModifiers.js";

export const getAllCardModifiersHandler = async (req, res) => {
  try {
    const packs = await getAllCardModifiers();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
