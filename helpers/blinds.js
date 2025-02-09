import supabase from "../config/supabase_config.js";

export const getAllBlinds = async () => {
  const { data, error } = await supabase
    .from("blind")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};