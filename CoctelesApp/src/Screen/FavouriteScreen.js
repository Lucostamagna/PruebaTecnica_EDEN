import React from "react";
import styled from "styled-components/native";

const FavouriteScreen = () => {
  return (
    <Container>
      <Title>Favourite Screen</Title>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export default FavouriteScreen;
