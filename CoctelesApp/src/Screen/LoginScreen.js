import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Constant/Color";
import Button from "../Components/Botton";
import { Feather } from "@expo/vector-icons";
import Input from "../Components/Input";
import Login from "../Api/Index";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleLogin = () => {
    Login({ email, password })
      .then((user) => {
        console.log("Inicio de sesión exitoso:", user);
        alert("Inicio de sesión exitoso");
        navigation.navigate("Root");
      })
      .catch((error) => {
        alert("Email o contraseña incorrectos", error);
      });
  };

  return (
    <MyView>
      <StyledImage source={require("../../assets/logoPequeño.png")} />
      <MyText>Ingresa tus datos</MyText>
      <ViewContainer>
        <TextInput> Correo electrónico </TextInput>
        <Input label={"Email"} value={email} onChangeText={setEmail} />
        <TextInput> Contraseña </TextInput>
        <InputContainer>
          <Input
            label={"Contraseña"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <MyTouchableOpacity onPress={toggleShowPassword} activeOpacity={0.8}>
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#323646"
            />
          </MyTouchableOpacity>
        </InputContainer>
      </ViewContainer>
      <TextPassword> Olvidé mi contraseña </TextPassword>
      <Button title={"Iniciar sesión"} onPress={handleLogin} />
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
const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MyTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  right: 50px;
`;

const TextPassword = styled.Text`
  margin-left: 30%;
  color: white;
  font-size: 15px;
  margin-bottom: 68px;
`;
export default LoginScreen;
