import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Constant/Color";
import Button from "../Components/Botton";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import Input from "../Components/Input";

const LoginScreen = () => {
  return (
    <MyView>
      <StyledImage source={require("../../assets/logoPequeño.png")} />
      <MyText>Ingresa tus datos</MyText>
      <ViewContainer>
        <TextInput> Correo electrónico </TextInput>
        <Input label={"Email"} />
        <TextInput> Contraseña </TextInput>
        <Input label={"Contraseña"} />
        <TouchableOpacity activeOpacity={0.8}></TouchableOpacity>
      </ViewContainer>
      <TextPassword> Olvidé mi contraseña </TextPassword>
      <Button title={"Iniciar sesión"} />
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
  margin-top: 38%;
  margin-left: 40%;
`;
const MyText = styled.Text`
  margin-left: 35%;
  color: white;
  font-size: 16px;
`;
const ViewContainer = styled.View`
  margin-top: 10%;
`;

const TextInput = styled.Text`
  margin-left: 3%;
  color: white;
  font-size: 15px;
  margin-bottom: 8px;
`;

const TextPassword = styled.Text`
  margin-left: 30%;
  color: white;
  font-size: 15px;
  margin-bottom: 68px;
`;
export default LoginScreen;
