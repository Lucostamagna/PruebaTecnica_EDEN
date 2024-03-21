import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View,TextInput} from "react-native";
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
  const [searchTerm, setSearchTerm] = useState('');
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
  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {
      try {
        const result = await searchCocktailByName(searchTerm.trim());
        setCocktails(result || []);
      } catch (error) {
        console.error("Error searching for cocktails:", error);
      }
    } else {
      
      setCocktails([]);
    }
  };

  const CocktailCard = ({ item }) => {
    return (
      <CardContainer>
        <Text>{item.strIngredient}</Text>
        <Text>{item.strDescription}</Text>
        <CocktailImage  source={{ uri: item.strDrinkThumb }} />
        <TextTitle>{item.strDrink}</TextTitle>
        <DescriptionText numberOfLines={4} ellipsizeMode="tail">
          {item.strInstructions}
        </DescriptionText>
        <ButtonReceta >
          <Text> hola</Text>
         </ButtonReceta >
      </CardContainer>
    );
  };
  return (
    <ScrollView>
    <MyView>
      <TextCoctel>Encuentra las mejores recetas en Cócteles</TextCoctel>
      <TextTragos> ¿Qué tragos te gustaría preparar hoy?</TextTragos>
      <SearchBar setSearchTerm={setSearchTerm} handleSearch={handleSearch} />

<View style={{ marginBottom:-60, height:150}}>
      <ScrollView horizontal   showsHorizontalScrollIndicator={false} >
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
      </ScrollView>
      </View>


<View style={{marginBottom:'5%', marginTop:'1%'}}>
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
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px; 
  margin-vertical: 1px;
  margin-horizontal: 5px;
  border-width: 1px;
  border-color: #ddd; /* Color del borde */
`;

const CocktailImage = styled.Image`
  width: 230px; 
  height: 160px; 
  margin-top: -50px;
  border-top-left-radius: 15px; /* Redondea el borde superior izquierdo */
  border-top-right-radius: 15px;
`;

const TextTitle = styled.Text`
font-size: 20px;
margin-top: 5px;
font-weight: bold;
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
  margin-bottom: -5px;
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
const ButtonReceta = styled.TouchableOpacity`
  background-color: yellow;
  border-radius: 20px;
  padding: 15px;
  width: 100%;
  height: 10%;
  align-self: center;
  margin-top: 20px;
`;
export default HomeScreen;
