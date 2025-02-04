import { getAllJokers, getJokerById } from "../helpers/jokers.js";

// Get all jokers
export const getAllJokersHandler = async (req, res) => {
  console.log("try to get all jokers");
  try {
    const jokers = await getAllJokers();
    res.status(200).json(jokers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single joker by ID
export const getJokerByIdHandler = async (req, res) => {
  console.log("try to get joker by id");
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
