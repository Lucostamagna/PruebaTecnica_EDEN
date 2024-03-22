import React from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import SearchBar from "../Components/SearchBar";

const SeacrhScreen = ({ route }) => {
  const { result, searchText } = route.params;

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
    <ViewContainer >
      <SearchBar initialValue={searchText} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => <CocktailCard item={item} />} 
        keyExtractor={(item) => item.idDrink}
      />
    </ViewContainer >
  );
};

const CardContainer = styled.View`
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px;
  margin-vertical: -40px;
  margin-top: 50px;

  margin-horizontal: 50px;
  border-width: 1px;
  width: 300px;
  height: 380px;
  border-color: #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const ViewContainer  = styled.View`
margin-bottom:90px;
`;
const CocktailImage = styled.Image`
  width: 270px;
  height: 160px;
  margin-top: 2px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const TextTitle = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

const DescriptionText = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  overflow: hidden;
  margin-horizontal: 12px;
  width: 200px;
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

const ViewTitle = styled.View`
  width: 90%;
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

const TextReceta = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 14px;
`;

export default SeacrhScreen;
