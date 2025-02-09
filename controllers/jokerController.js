import { getAllJokers, getJokerById, getJokerByRarity } from "../helpers/jokers.js";

// Get all jokers
export const getAllJokersHandler = async (req, res) => {
  try {
    const jokers = await getAllJokers();
    res.status(200).json(jokers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single joker by ID
export const getJokerByIdHandler = async (req, res) => {
  const { joker_id } = req.params; // Get joker_id from the route parameter
  try {
    const joker = await getJokerById(joker_id);
    if (joker) {
      res.status(200).json(joker);
    } else {
      res.status(404).json({ message: "Joker not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJokerByRarityHandler = async (req, res) => {
  const { rarity } = req.query; // Get rarity from query params, ex common, uncommon, rare, legendary

  try {
    if (!rarity) {
      return res.status(400).json({ message: "Rarity is required" });
    }

    const jokers = await getJokerByRarity(rarity);

    if (jokers.length === 0) {
      return res.status(404).json({ message: "No jokers found for this rarity" });
    }

    res.status(200).json(jokers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
