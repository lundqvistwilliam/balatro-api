import { getAllPlanets } from "../helpers/planets.js";

// Get all planets
export const getAllPlanetsHandler = async (req, res) => {
  try {
    const jokers = await getAllPlanets();
    res.status(200).json(jokers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};