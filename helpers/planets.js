import supabase from "../config/supabase_config.js";

export const getAllPlanets = async () => {
  const { data, error } = await supabase
    .from("planet")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};