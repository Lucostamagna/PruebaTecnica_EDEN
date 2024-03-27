import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Index";

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
