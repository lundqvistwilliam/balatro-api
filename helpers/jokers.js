import supabase from "../config/supabase_config.js";

// get all jokers from the table
export const getAllJokers = async () => {
  const { data, error } = await supabase
    .from("joker")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// get a single joker by its ID
export const getJokerById = async (joker_id) => {
  const { data, error } = await supabase
    .from("joker")
    .select("*")
    .eq("joker_number", joker_id)  // Filter by joker_id
    .single();                 // Return a single row

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

