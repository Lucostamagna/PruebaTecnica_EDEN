import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm.trim());
    }
  };
  return (
    <Container>
      <InputContainer>
        <EvilIcons name="search" size={24} color="black" />
        <Input
          placeholder="Search..."
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />
        <SearchButton title="Search" onPress={handleSearch} />
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
const SearchButton = styled.Button``;
export default SearchBar;
