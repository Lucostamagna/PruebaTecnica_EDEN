import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../Screen/OnBoardingScreen";
import LoginScreen from "../Screen/LoginScreen";
import HomeScreen from "../Screen/HomeScreen";
import FavouriteScreen from "../Screen/FavouriteScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import MyBottomTab from "./BottomTabNavigation";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoarding" component={MyBottomTab}  options={{
            headerShown: false, 
          }}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={FavouriteScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
