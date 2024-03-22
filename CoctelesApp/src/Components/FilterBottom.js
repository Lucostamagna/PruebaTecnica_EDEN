import React from "react";
import { View, ScrollView, Text } from "react-native";
import SearchBotton from "../Components/SearchBotton";
import styled from "styled-components/native";

const FilterButtons = ({
  handleSearchCocktailByName,
  handleSearchCocktailByIngredients,
  handleFetchRandomCocktail,
  handleFetchCategoryCocktail,
}) => {
  return (
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
      <SearchBotton
        title={"Por categoría"}
        onPress={handleFetchCategoryCocktail}
      />
    </ButtonContainer>
  );
};
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
export default FilterButtons;
