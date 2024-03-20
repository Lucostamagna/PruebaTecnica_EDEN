import styled from "styled-components/native";
import { Colors } from "../Constant/Color";

const SearchBotton= ({ title, onPress }) => {
  return (
    <MyButton onPress={onPress}  activeOpacity={0.7}>
      <MyText>{title}</MyText>
    </MyButton>
  );
};

const MyButton = styled.TouchableOpacity`
  background-color:${(props) => (props.disabled ? Colors.gray : "white")};
  border-radius: 30px;
  border-color: gray;
  border-width: 2px;
  width: 30%;
  height: 30%;
  
 justify-content:center;
  margin-top: 5px;
  margin-right: 8px;
  align-items: center; 
`;
const MyText = styled.Text`
  font-size: 15px;
 
 
`;
export default SearchBotton;