import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const SearchBar = ({ setSearchTerm, handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const onSubmitEditing = () => {
    setSearchTerm(searchText);
    handleSearch();
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
          value={searchText}
          onSubmitEditing={onSubmitEditing}
         
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