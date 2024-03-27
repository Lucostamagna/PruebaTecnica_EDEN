import axios from "axios";

export const searchCocktailByName = async (name) => {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    return response.data.drinks;
  } catch (error) {
    console.error("Error searching cocktail by name:", error);
    throw error;
  }
};

// export const searchCocktailByName = async (name) => {
//   try {
//     const response = await fetch(
//       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
//     );

//     if (!response.ok) {
//       throw new Error("Error searching cocktail by name");
//     }

//     const data = await response.json();
//     return data.drinks;
//   } catch (error) {
//     console.error("Error searching cocktail by name:", error);
//     throw error;
//   }
export const searchCocktailByIngredients = async (ingredient) => {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`
    );
    return response.data.ingredients;
  } catch (error) {
    console.error("Error searching cocktail by ingredients:", error);
    throw error;
  }
};

export const fetchRandomCocktail = async () => {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching random cocktail:", error);
    throw error;
  }
};

export const fetchCategoryCocktail = async () => {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    );
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching category cocktail:", error);
    throw error;
  }
};
