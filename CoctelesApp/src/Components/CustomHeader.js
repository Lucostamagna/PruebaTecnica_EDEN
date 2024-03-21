import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from "react-native";
import { Colors } from "../Constant/Color";
import styled from "styled-components/native";

const CustomHeader = () => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const getUserDataFromStorage = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString !== null) {
          const userDataObject = JSON.parse(userDataString);
          setUserData(userDataObject);
        }
      } catch (err) {
        console.error("Error al cargar los datos:", err);
      }
    };
     getUserDataFromStorage();
    }, []);

  return (
    <Container>
        <CustomImage source={require('../../assets/logoPequeño.png')} />
        {userData && <MyText> Hola, {userData.name}!</MyText>}      
    </Container>
  )
}
const Container = styled(View)`
  flex-direction: row;
  height: 100px;
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