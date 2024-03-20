import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../Screen/HomeScreen";
import FavouriteScreen from "../Screen/FavouriteScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import CustomHeader from "../Components/CustomHeader";


const Tab = createBottomTabNavigator();

const MyBottomTab = () => {
  return (
    
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          left: 0,
          right: 0,
          backgroundColor: "black",
          borderTopColor: "white",
          borderTopWidth: 2,
          paddingTop: 8,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          //  height: keyboardHeight > 0 ? 0 : 50,
        },

        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#FFDE59",
        tabBarPressColor: "rgba(243, 48, 95, 0.7)",
      }}
    >
         
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color={color} />
          ),

         headerShown:false
          
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={25} color={color} />
          ),
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
          headerShown:false,
        }}
      />
    </Tab.Navigator>
  );
};
export default MyBottomTab;
