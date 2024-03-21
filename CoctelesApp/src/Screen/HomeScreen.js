import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import SearchBotton from "../Components/SearchBotton";
import {
  searchCocktailByName,
  searchCocktailByIngredients,
  fetchRandomCocktail,
  fetchCategoryCocktail,
} from "../Api/Request";
import SearchBar from "../Components/SearchBar";

const HomeScreen = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    handleSearchCocktailByName("margarita");
  }, []);

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
      <TextTragos> ¿Qué tragos te gustaría preparar hoy?</TextTragos>
      <SearchBar/>
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
        <SearchBotton
          title={"Más elegido"}
          onPress={handleFetchRandomCocktail}
        />
        <SearchBotton
          title={"Por categoría"}
          onPress={handleFetchCategoryCocktail}
        />
      </ButtonContainer>

      <FlatList
        data={cocktails}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Text> {item.strIngredient}</Text>
            <Text>{item.strDescription}</Text>
            <CocktailImage
              resizeMode="cover"
              source={{ uri: item.strDrinkThumb }}
            />
            <Text>{item.strDrink}</Text>
            <DescriptionText numberOfLines={4} ellipsizeMode="tail">
              {item.strInstructions}
            </DescriptionText>
          </View>
        )}
        // keyExtractor={(item) => item.idDrink.toString()}
      />
    </MyView>
  );
};

const MyView = styled.View`
  flex: 1;
`;
const Separator = styled.View`
  width: 10px; // Ajusta el espacio entre las tarjetas
`;
const CardContainer = styled.View`
  background-color: blue;

  border-radius: 10px;

  padding: 10px;
  width: 55%;
  height: 100%;
  elevation: 3;

  shadow-color: black;
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;
const CocktailImage = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const CocktailTitle = styled.Text`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
`;
const TextCoctel = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  text-align: left;
  margin: 12px;
`;
const TextTragos = styled.Text`
  font-size: 18px;
  font-weight: bold;
 
  margin-top: 15px;
  text-align: left;
  margin: 12px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin-right: 8px;
  margin-top: 10px;
  margin-bottom: -60px;
`;
const TextSearch = styled.Text`
  font-size: 22px;
  margin-right: 15px;
  margin: 10px;
`;

const DescriptionText = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  overflow: hidden;
  width: 150px;
`;
export default HomeScreen;
