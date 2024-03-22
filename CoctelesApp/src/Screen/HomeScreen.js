import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
 
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const navigation = useNavigation();
  console.log(cocktails);

  useEffect(() => {
    handleSearchCocktailByName("margarita");
  }, []);
  console.log(handleSearchCocktailByName);

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

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      try {
        const result = await searchCocktailByName(searchTerm.trim());
      
        navigation.navigate("Search", { result,searchTerm  });
        setSearchTerm("");
        await saveSearchTerm(searchTerm.trim());
      } catch (error) {
        console.error("Error de búsqueda:", error);
      }
    } else {
      setCocktails([]);
    }
  };
  const saveSearchTerm = async (term) => {
    try {
      const searches = await AsyncStorage.getItem('searches');
      const parsedSearches = searches ? JSON.parse(searches) : [];

     
      parsedSearches.push(term);
console.log('ppppppppppp',parsedSearches)
      await AsyncStorage.setItem('searches', JSON.stringify(parsedSearches));
    } catch (error) {
      console.error('Error al guardar la búsqueda:', error);
    }
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
    <ScrollView>
      <MyView>
        <TextCoctel>Encuentra las mejores recetas en Cócteles</TextCoctel>
        <TextTragos> ¿Qué tragos te gustaría preparar hoy?</TextTragos>
        <SearchBar setSearchTerm={setSearchTerm} handleSearch={handleSearch} />

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
        <View style={{ marginBottom: "5%", marginTop: "1%" }}>
          <FlatList
            data={cocktails}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CocktailCard item={item} />}
          />
        </View>
      </MyView>
    </ScrollView>
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

export default HomeScreen;
