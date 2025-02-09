import supabase from "../config/supabase_config.js";

export const getAllSpectral = async () => {
  const { data, error } = await supabase
    .from("spectral")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};