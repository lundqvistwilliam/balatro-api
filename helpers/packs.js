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
