import React from 'react'
import { FlatList,  Text, View } from "react-native";
import styled from "styled-components/native";
import SearchBar from '../Components/SearchBar';

const SeacrhScreen = ({ route }) => {

  const { result} = route.params;
  const CocktailCard = ({ item }) => {
    return (
      <CardContainer>
        <Text>{item.strIngredient}</Text>
        <Text>{item.strDescription}</Text>
        <CocktailImage source={{ uri: item.strDrinkThumb }} />
        <TextTitle>{item.strDrink}</TextTitle>
        <DescriptionText numberOfLines={4} ellipsizeMode="tail">
          {item.strInstructions}
        </DescriptionText>
        <ButtonReceta>
          <Text> hola</Text>
        </ButtonReceta>
      </CardContainer>
    );
  };
  return (
   
    <View>
      <SearchBar  />
      <FlatList
     
        data={result}
        renderItem={({ item }) => <CocktailCard item={item} />} // Utiliza el componente de tarjeta de cóctel para renderizar cada resultado
        keyExtractor={(item) => item.idDrink}
      />
    </View>
 
  )
}

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
  height: 350px;
  border-color: #ddd; /* Color del borde */
`;

const CocktailImage = styled.Image`
  width: 200px;
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
export default SeacrhScreen



