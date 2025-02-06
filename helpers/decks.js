import supabase from "../config/supabase_config.js";

export const getAllDecks = async () => {
  const { data, error } = await supabase
    .from("deck")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};