import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Index";
import { searchCocktailByName } from "../Api/Request";

export const handleLogin = ({ email, password, navigation }) => {
    Login({ email, password })
      .then((user) => {
        AsyncStorage.setItem("userData", JSON.stringify(user.data));
        console.log("Datos del usuario guardados en AsyncStorage:", user.data);
        console.log("Inicio de sesión exitoso:", user);
        alert("Inicio de sesión exitoso");
        navigation.navigate("Root");
      })
      .catch((error) => {
        alert("Email o contraseña incorrectos", error);
      });
  };
  
  export const saveSearchTerm = async (term) => {
    try {
      const searches = await AsyncStorage.getItem("searches");
      const parsedSearches = searches ? JSON.parse(searches) : [];
      //object
      parsedSearches.push(term);
      console.log(parsedSearches);
      await AsyncStorage.setItem("searches", JSON.stringify(parsedSearches));
    } catch (error) {
      console.error("Error al guardar la búsqueda:", error);
    }
  };