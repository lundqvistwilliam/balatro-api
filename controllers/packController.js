import { getAllBoosterPacks, getBoosterPacksByCategory } from "../helpers/packs.js";

export const getAllPacksHandler = async (req, res) => {
  try {
    const packs = await getAllBoosterPacks();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get packs by category
export const getPacksByCategoryHandler = async (req, res) => {
  const { category } = req.query; // Get category from query params, ex arcana, celestial, standard, joker

  try {
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    const packs = await getBoosterPacksByCategory(category);

    if (packs.length === 0) {
      return res.status(404).json({ message: "No packs found for this category" });
    }

    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};