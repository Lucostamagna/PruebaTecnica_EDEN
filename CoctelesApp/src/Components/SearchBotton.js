import styled from "styled-components/native";
import { Colors } from "../Constant/Color";

const SearchBotton= ({ title, onPress }) => {
  return (
    <MyButton onPress={onPress}  activeOpacity={0.8}>
      <MyText>{title}</MyText>
    </MyButton>
  );
};

const MyButton = styled.TouchableOpacity`
background-color: ${(props) => (props.disabled ? Colors.background: "white")};
  border-radius: 30px;
  flex: 1;
  border-color: gray;
  border-width: 2px;
  width: 25%;
  height: 35%;
  padding: 10px;
  justify-content: center;
 
  margin-right: 8px;
 
  align-items: center;

`;
const MyText = styled.Text`
  font-size: 15px;
 
 
`;
export default SearchBotton;