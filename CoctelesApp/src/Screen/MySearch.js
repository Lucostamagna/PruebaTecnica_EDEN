import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { searchCocktailByName } from "../Api/Request";
import styled from "styled-components/native";

const MySearch = () => {
  const [savedSearches, setSavedSearches] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const getSavedSearches = async () => {
    try {
      const searches = await AsyncStorage.getItem("searches");
      return searches ? JSON.parse(searches) : [];
    } catch (error) {
      console.error("Error al recuperar búsquedas guardadas:", error);
      return [];
    }
  };

  const handleSearchSavedItem = async (searchItem) => {
    try {
      const result = await searchCocktailByName(searchItem);
      setSearchResults(result);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  useEffect(() => {
    const fetchSavedSearches = async () => {
      const searches = await getSavedSearches();
      setSavedSearches(searches);
      if (searches.length > 0) {
        handleSearchSavedItem(searches[0]);
      }
    };

    fetchSavedSearches();
  }, []);

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
    <View style={{ width: "95%" }}>
      <Text>Búsquedas Guardadas:</Text>
      <FlatList
        horizontal
        data={savedSearches}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSearchSavedItem(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text>Resultados de la última búsqueda:</Text>
      <FlatList
        horizontal
        data={searchResults}
        renderItem={({ item }) => <CocktailCard item={item} />} // Utiliza el componente de la card de la bebida para renderizar cada resultado
        keyExtractor={(item) => item.idDrink}
      />
    </View>
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

export default MySearch;
