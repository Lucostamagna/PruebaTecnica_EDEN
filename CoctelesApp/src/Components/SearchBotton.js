import React, { useState } from "react";
import styled from "styled-components/native";

const SearchBotton = ({ title, onPress }) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
    onPress();
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <MyButton
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      pressed={pressed}
      activeOpacity={0.8}
    >
      <MyText pressed={pressed}>{title}</MyText>
    </MyButton>
  );
};
const MyButton = styled.TouchableOpacity`
  background-color: ${({ pressed }) => (pressed ? "gray" : "white")};
  border-radius: 30px;
  flex: 1;
  border-color: gray;
  border-width: 2px;
  width: 25%;
  height: 35%;
  padding: 10px;
  justify-content: center;
  margin-right: 8px;
  align-items: center;
`;
const MyText = styled.Text`
  font-size: 15px;
`;
export default SearchBotton;
