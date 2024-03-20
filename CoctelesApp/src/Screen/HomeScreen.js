import React, { useState } from "react";
import axios from "axios";
import {searchCocktailByName, searchCocktailByIngredients, fetchRandomCocktail , fetchCategoryCocktail} from "../Api/Request"

import { View, Text, Button, FlatList, Image } from "react-native";
const HomeScreen = () => {
  const [cocktails, setCocktails] = useState([]);

  // //POR NOMBRE
  // const searchCocktailByName = async (name) => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  //     );
  //     setCocktails(response.data.drinks);
  //   } catch (error) {
  //     console.error("Error searching cocktail by name:", error);
  //   }
  // };
  // //INGREDIENTES no anda
  // const searchCocktailByIngredients = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`
  //     );

  //     setCocktails(response.data.ingredients);
  //   } catch (error) {
  //     console.error("Error searching cocktail by name:", error);
  //   }
  // };
  // //mas ELEGIDO

  // const fetchRandomCocktail = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  //     );
  //     setCocktails(response.data.drinks);
  //   } catch (error) {
  //     console.error("Error fetching random cocktail:", error);
  //   }
  // };

  // const fetchCategoryCocktail = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
  //     );
  //     setCocktails(response.data.drinks);
  //   } catch (error) {
  //     console.error("Error fetching random cocktail:", error);
  //   }
  // };
  const handleSearchCocktailByName = async () => {
    const drinks = await searchCocktailByName("margarita");
    setCocktails(drinks);
  };

  const handleSearchCocktailByIngredients = async () => {
    const ingredients = await searchCocktailByIngredients();
    setCocktails(ingredients);
  };

  const handleFetchRandomCocktail = async () => {
    const randomDrink = await fetchRandomCocktail();
    setCocktails(randomDrink);
  };

  const handleFetchCategoryCocktail = async () => {
    const categoryDrinks = await fetchCategoryCocktail();
    setCocktails(categoryDrinks);
  };

  
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Cocktails
      </Text>
      <Button
        title="Nombre"
        onPress={() => handleSearchCocktailByName("margarita")}
      />
      <Button
        title="Buscar Ingrediente"
        onPress={handleSearchCocktailByIngredients }
      />
      <Button title="mas elegido" onPress={ handleFetchRandomCocktail} />
      <Button title="Categoria" onPress={handleFetchCategoryCocktail } />

      <FlatList
        data={cocktails}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Image
              source={{ uri: item.strDrinkThumb }}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.strDrink}</Text>
              <Text style={{ fontSize: 30, backgroundColor: "red" }}>
                {item.strDescription}
              </Text>
              <Text>{item.strIngredient1}</Text>
              <Text style={{ fontSize: 30, backgroundColor: "red" }}>
                {item.strDescription}
              </Text>
            </View>
          </View>
        )}
        // keyExtractor={(item) => item.idDrink.toString()}
      />
    </View>
  );
};

export default HomeScreen;
