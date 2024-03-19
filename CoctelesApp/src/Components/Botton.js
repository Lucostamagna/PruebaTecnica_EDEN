import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../Constant/Color";

const Button = ({ title, onPress }) => {

  return (
    <MyButton onPress={onPress}>
      <Text>{title}</Text>
    </MyButton>
  );
};
const MyButton = styled.TouchableOpacity`
background-color: ${Colors.bottonLogin};
border-radius: 30px;
width: 90%;
align-self: center;
padding: 15px;
`;
export default Button;
