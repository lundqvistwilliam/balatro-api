import supabase from "../config/supabase_config.js";

export const getAllStakes = async () => {
  const { data, error } = await supabase
    .from("stakes")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};