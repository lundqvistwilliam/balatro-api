import supabase from "../config/supabase_config.js";

export const getAllVouchers = async () => {
  const { data, error } = await supabase
    .from("voucher")
    .select(`
      id, 
      name, 
      effect, 
      unlock_condition,
      image, 
      voucher_upgrade(id, name, effect, image)
    `);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
