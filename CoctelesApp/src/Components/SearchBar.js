import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { searchCocktailByName } from "../Api/Request";


const SearchBar = ({ initialValue }) => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const onSubmitEditing = () => {
    setSearchText(searchText);
    handleSearch();
  };
  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      try {
        const result = await searchCocktailByName(searchText.trim());
        navigation.navigate("Search", { result,  searchText});
        setSearchText("");
        await saveSearchTerm(searchText.trim());
      } catch (error) {
        console.error("Error de búsqueda:", error);
      }
    } else {
      setCocktails([]);
    }
  };
  const saveSearchTerm = async (term) => {
    try {
      const searches = await AsyncStorage.getItem("searches");
      const parsedSearches = searches ? JSON.parse(searches) : [];
      parsedSearches.push(term);
      console.log(parsedSearches);
      await AsyncStorage.setItem("searches", JSON.stringify(parsedSearches));
    } catch (error) {
      console.error("Error al guardar la búsqueda:", error);
    }
  };
  return (
    <Container>
      <InputContainer>
        <TouchableOpacity onPress={() => navigation.navigate("MySearch")}>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>

        <Input
          placeholder="Buscar"
          onChangeText={setSearchText}
          onSubmitEditing={onSubmitEditing}
          value={initialValue}
        />
        <MaterialCommunityIcons name="microphone" size={24} color="black" />
      </InputContainer>
    </Container>
  );
};
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 10px;
  margin-top: 19px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-color: gray;
  border-radius: 5px;
  padding: 5px;
  width: 95%;
  background-color: #dcdcdc;
`;

const Input = styled.TextInput`
  flex: 1;
  margin-horizontal: 5px;
`;

export default SearchBar;
