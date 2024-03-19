import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Constant/Color";
import Button from "../Components/Botton";

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  return (
    <MyView>
      <StyledImage source={require("../../assets/logoCoctel.png")} />
      <ButtonView>
        <Button
          title={"Iniciar sesión"}
          onPress={() => navigation.navigate("Login")}
        />
      </ButtonView>
    </MyView>
  );
};

const MyView = styled.View`
  background-color: ${Colors.background};
  flex: 1;
`;
const StyledImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 40%;
  margin-left: 25%;
`;
const ButtonView = styled.View`
  margin-top: 80px;
`;
export default OnBoardingScreen;
