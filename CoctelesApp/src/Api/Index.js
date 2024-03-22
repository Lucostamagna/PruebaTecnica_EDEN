import React from "react";

const Login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lowercaseEmail = email.toLowerCase();  
      if (lowercaseEmail === "juan.challenge@gmail.com" && password === "juan123456!") {
        resolve({ data: { name: "Juan" } });
      } else {
        reject({ erro: "Email o contraseña incorrectos" });
      }
    }, 1000);
  });
};

export default Login;
