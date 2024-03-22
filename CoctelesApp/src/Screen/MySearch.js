import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import SearchBar from "../Components/SearchBar";
import { searchCocktailByName } from "../Api/Request";

const MySearch = () => {
  const [savedSearches, setSavedSearches] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
        handleSearchSavedItem(searches[searches.length - 1]);
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
    <MyView>
      <SearchBar />
      <OpenModalButton onPress={() => setModalVisible(true)}>
        <Text> Historial de búsqueda</Text>
      </OpenModalButton>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={savedSearches}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    handleSearchSavedItem(item);
                    setModalVisible(false);
                  }}
                >
                  <ListItemContainer>
                    <Entypo name="back-in-time" size={24} color="black" />
                    <ModalItem>{item}</ModalItem>
                  </ListItemContainer>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingBottom: 10 }}
            />
          </ModalContent>
        </ModalContainer>
      </Modal>

      <TextResult>Tus últimas búsqueda:</TextResult>
      <FlatList
        horizontal
        data={searchResults}
        renderItem={({ item }) => <CocktailCard item={item} />}
        keyExtractor={(item) => item.idDrink}
      />
    </MyView>
  );
};
const OpenModalButton = styled.TouchableOpacity`
  background-color: #ffde59;
  width: 40%;
  height: 7%;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-height: 70%;
`;

const ModalItem = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  margin-horizontal: 15px;
`;

const MyView = styled.View`
  width: "95%";
  margin-top: 30px;
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

const TextResult = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin-top: 40px;
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
export const ListItemContainer = styled.View`
  flex-direction: row;
  padding: 8px;
`;

export default MySearch;
