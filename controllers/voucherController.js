import { getAllVouchers } from "../helpers/vouchers.js";

export const getAllVouchersHandler = async (req, res) => {
  try {
    const packs = await getAllVouchers();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
