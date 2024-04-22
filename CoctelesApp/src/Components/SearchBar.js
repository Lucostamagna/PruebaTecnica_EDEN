import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { searchCocktailByName } from "../Api/Request";
import { saveSearchTerm } from "../Api/AsycnStorage";


const useSearchBar = (initialValue) => {
  const [searchText, setSearchText] = useState(initialValue);
  const navigation = useNavigation();

  const onSubmitEditing = async () => {
    if (searchText.trim() !== "") {
      try {
        const result = await searchCocktailByName(searchText.trim());
        navigation.navigate("Search", { result, searchText });
        setSearchText("");
        await saveSearchTerm(searchText.trim());
      } catch (error) {
        console.error("Error de búsqueda:", error);
      }
    } else {
      // Handle empty search
    }
  };

  return { searchText, setSearchText, onSubmitEditing };
};

const SearchBar = ({ initialValue }) => {
  const { searchText, setSearchText, onSubmitEditing } = useSearchBar(
    initialValue
  );

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
          value={searchText}
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
