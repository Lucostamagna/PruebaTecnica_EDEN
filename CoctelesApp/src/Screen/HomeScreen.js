import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components/native";
import {
  searchCocktailByName,
  searchCocktailByIngredients,
  fetchRandomCocktail,
  fetchCategoryCocktail,
} from "../Api/Request";

import { View, Text, Button, FlatList, Image, StyleSheet, ScrollView } from "react-native";
import SearchBotton from "../Components/SearchBotton";
const HomeScreen = () => {
  const [cocktails, setCocktails] = useState([]);

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
    <MyView>
      <TextCoctel>Encuentra las mejores recetas en Cócteles</TextCoctel>
      
      <ButtonContainer>
        <TextSearch> Filtros</TextSearch>
        
        <SearchBotton
          title={"Por nombre"}
          onPress={() => handleSearchCocktailByName("margarita")}
        />
        <SearchBotton
          title={"Por ingrediente"}
          onPress={handleSearchCocktailByIngredients}
        />
        <SearchBotton title={"Más elegido"} onPress={handleFetchRandomCocktail} />
        <SearchBotton title={"Por categoría"} onPress={handleFetchCategoryCocktail} />
      </ButtonContainer>
   
      <View>
      <FlatList
        data={cocktails}
        horizontal
        renderItem={({ item }) => (
          <CardContainer>
            <CocktailImage source={{ uri: item.strDrinkThumb }} />
            <CocktailTitle>{item.strDrink}</CocktailTitle>
            <DescriptionText>{item.strDescription}</DescriptionText>
            <Text>{item.strIngredient1}</Text>
          </CardContainer>
        )}
        // keyExtractor={(item) => item.idDrink.toString()}
      />
      </View>
     
    </MyView>
  );
};

const MyView = styled.View`
  background-color: white;
  flex: 1;
`;
const CardContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  border-color: lightgray;
  margin: 10px;
  padding: 10px;
  elevation: 3; /* Agrega sombra en Android */
  shadow-color: black; /* Agrega sombra en iOS */
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;
const TextCoctel = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  text-align: left;
  margin: 12px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  margin-right: 8px;
  
`;
const TextSearch =styled.Text`
font-size: 22px;
margin-right: 15px;
margin: 10px;
`;
const CocktailImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const CocktailTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const DescriptionText = styled.Text`
  font-size: 16px;
  background-color: red;
  padding: 5px;
  margin-top: 5px;
`;
export default HomeScreen;
