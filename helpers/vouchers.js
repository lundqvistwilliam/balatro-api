import supabase from "../config/supabase_config.js";

// Gets all vouchers and their upgrades included
export const getAllVouchers = async () => {
  const { data, error } = await supabase
    .from("voucher")
    .select(`
      id, 
      name, 
      effect, 
      image, 
      voucher_upgrade(id, name, effect, unlock_condition, image)
    `);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

