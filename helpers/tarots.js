import supabase from "../config/supabase_config.js";

export const getAllTarots = async () => {
  const { data, error } = await supabase
    .from("tarot")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};