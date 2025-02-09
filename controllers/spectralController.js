import { getAllSpectral } from "../helpers/spectral.js";

export const getAllSpectralHandler = async (req, res) => {
  try {
    const packs = await getAllSpectral();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
