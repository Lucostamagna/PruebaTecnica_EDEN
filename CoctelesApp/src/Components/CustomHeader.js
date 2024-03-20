import React from 'react'
import { View, Text, Image } from "react-native";
import { Colors } from "../Constant/Color";
import styled from "styled-components/native";

const CustomHeader = () => {
  return (
    <Container>
        <CustomImage source={require('../../assets/logoPequeño.png')} />
        <MyText>Word1</MyText>
    </Container>
  )
}
const Container = styled(View)`
  flex-direction: row;
  height: 45%;
  align-items: center;
  background-color: ${Colors.background};
`;
const CustomImage = styled(Image)`
  width: 50px;
  height: 40px;
  margin-left: 15px;
`;
const MyText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
  color: #FFFFFF;
`;
export default CustomHeader