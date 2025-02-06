import supabase from "../config/supabase_config.js";

export const getAllCardModifiers = async () => {
  const { data, error } = await supabase
    .from("card_modifier")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};