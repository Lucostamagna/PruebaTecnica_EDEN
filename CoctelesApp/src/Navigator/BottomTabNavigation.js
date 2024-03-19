import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from "../Screen/HomeScreen";
import FavouriteScreen from "../Screen/FavouriteScreen";
import ProfileScreen from "../Screen/ProfileScreen"

const Tab = createBottomTabNavigator();

const MyBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={32} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Favoritos"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={32} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyBottomTab;