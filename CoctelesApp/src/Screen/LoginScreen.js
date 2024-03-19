import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Constant/Color";
import Button from "../Components/Botton";
import { Text } from "react-native";
import Input from "../Components/Input";

const LoginScreen = () => {
  return (
    <MyView>
       <StyledImage source={require("../../assets/logoPequeño.png")} />
   
   <Text>Ingresa tus datos</Text>
   <Input/>
    </MyView>
  );
};

const MyView = styled.View`
  background-color: ${Colors.background};
  flex: 1;
`;
const StyledImage = styled.Image`
  width: 90px;
  height: 90px;
  margin-top: 40%;
  margin-left: 40%;
`;

export default LoginScreen;
