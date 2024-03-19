import React from 'react';
import { TextInput } from 'react-native';
import styled from "styled-components/native";
import { Colors } from "../Constant/Color";


const Input = ({ label, value, onChangeText, secureTextEntry }) => {
return(
    <MyView>
      <TextInput
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </MyView>
  );
};
const MyView= styled.View`
  width: 90%;
  height: 45px;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  background-color: ${Colors.input};
  border-radius: 22px;
  border-width: 2px;
  border-color: ${Colors.input};
`;
export default Input;

