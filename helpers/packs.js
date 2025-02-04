import supabase from "../config/supabase_config.js";

export const getAllBoosterPacks = async () => {
  const { data, error } = await supabase
    .from("booster_pack")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};


// Get packs by category
export const getBoosterPacksByCategory = async (category) => {
  const { data, error } = await supabase
    .from("booster_pack")
    .select("*")
    .ilike("category", category);

  if (error) throw new Error(error.message);
  return data;
};