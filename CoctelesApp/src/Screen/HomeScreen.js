import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, ScrollView,RefreshControl  } from "react-native";
import styled from "styled-components/native";
import FilterButtons from "../Components/FilterBottom";
import SearchBar from "../Components/SearchBar";
import {
  searchCocktailByName,
  searchCocktailByIngredients,
  fetchRandomCocktail,
  fetchCategoryCocktail,
} from "../Api/Request";

const HomeScreen = () => {
  const [cocktails, setCocktails] = useState([]);
  const [refreshing, setRefreshing] = useState(false); 

  useEffect(() => {
    handleSearchCocktailByName("");
  }, []);
  
const onRefresh = async () => {
    setRefreshing(true); 
    await handleSearchCocktailByName("");
   

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  const handleSearchCocktailByName = async (name) => {
    const drinks = await searchCocktailByName(name);
    setCocktails(drinks);
  };

  const handleSearchCocktailByIngredients = async (ingredient) => {
    const ingredients = await searchCocktailByIngredients(ingredient);
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

  const CocktailCard = ({ item }) => {
    return (
      <CardContainer>
        {item.strIngredient && (
          <IngredientTitle>{item.strIngredient}</IngredientTitle>
        )}
        {item.strDescription && (
          <TextIngredient numberOfLines={8}>
            {item.strDescription}
          </TextIngredient>
        )}
        <CocktailImage source={{ uri: item.strDrinkThumb }} />
        <ViewTitle>
          <TextTitle>{item.strDrink}</TextTitle>
        </ViewTitle>

        <DescriptionText numberOfLines={4} ellipsizeMode="tail">
          {item.strInstructions}
        </DescriptionText>
        <ButtonReceta>
          <TextReceta> Ver receta</TextReceta>
        </ButtonReceta>
      </CardContainer>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView   refreshControl={ 
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} 
          />
        }>
        <MyView>
          <TextCoctel>Encuentra las mejores recetas en Cócteles</TextCoctel>
          <TextTragos> ¿Qué tragos te gustaría preparar hoy?</TextTragos>
          <SearchBar />
          <ViewBottom>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <FilterButtons
                handleSearchCocktailByName={handleSearchCocktailByName}
                handleSearchCocktailByIngredients={
                  handleSearchCocktailByIngredients
                }
                handleFetchRandomCocktail={handleFetchRandomCocktail}
                handleFetchCategoryCocktail={handleFetchCategoryCocktail}
              />
            </ScrollView>
          </ViewBottom>
          <CointainerFlatList>
            <FlatList
              data={cocktails}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <CocktailCard item={item} />}
            />
          </CointainerFlatList>
        </MyView>
      </ScrollView>
    </SafeAreaView>
  );
};

const MyView = styled.View`
  flex: 1;
`;
const CardContainer = styled.View`
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px;
  margin-vertical: 1px;
  margin-horizontal: 5px;
  border-width: 1px;
  border-color: #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const CocktailImage = styled.Image`
  width: 235px;
  height: 160px;
  margin-top: 2px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ViewTitle = styled.View`
  width: 90%;
`;
const TextTitle = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
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
const DescriptionText = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  overflow: hidden;
  margin-horizontal: 12px;
  width: 200px;
`;
const TextIngredient = styled.Text`
  font-size: 15px;
  margin-top: 15px;
  overflow: hidden;
  margin-horizontal: 12px;
  width: 200px;
  margin-bottom: -90px;
`;
const IngredientTitle = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;
const ButtonReceta = styled.TouchableOpacity`
  background-color: yellow;
  border-radius: 20px;
  padding: 15px;
  width: 50%;
  height: 14%;
  align-self: center;
  margin-top: 20px;
`;
const TextReceta = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 14px;
`;
const ViewBottom = styled.View`
  height: 150px;
  margin-bottom: -60px;
`;
const CointainerFlatList = styled.View`
 margin-bottom: 5%;
 margin-top: 1%;

`;
export default HomeScreen;
