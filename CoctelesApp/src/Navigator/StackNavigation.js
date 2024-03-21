import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../Screen/OnBoardingScreen";
import LoginScreen from "../Screen/LoginScreen";
import HomeScreen from "../Screen/HomeScreen";
import FavouriteScreen from "../Screen/FavouriteScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import MyBottomTab from "./BottomTabNavigation";
import CustomHeader from "../Components/CustomHeader";
import SeacrhScreen from "../Screen/SeacrhScreen";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    
    <Stack.Navigator
  
    >
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Root"
        component={MyBottomTab}
        options={{
        header: () => <CustomHeader/>,
          
        }}
      />
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Search" component={SeacrhScreen} />
    </Stack.Navigator>
  );
}
