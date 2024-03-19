import styled from "styled-components/native";
import { Colors } from "../Constant/Color";

const Button = ({ title, onPress }) => {
  return (
    <MyButton onPress={onPress}>
      <MyText>{title}</MyText>
    </MyButton>
  );
};
const MyButton = styled.TouchableOpacity`
  background-color: ${Colors.bottonLogin};
  border-radius: 30px;
  width: 85%;
  height: 26%;
  align-self: center;
  padding: 15px;
`;
const MyText = styled.Text`
  font-size: 16px;
  align-self: center;
  font-weight: bold;
`;
export default Button;
