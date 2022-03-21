import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home_Screen from "./src/home/Home_Screen";
import Login_Screen from "./src/login/Login_Screen";
import App_Navigator from "./src/nav/App_Navigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <App_Navigator></App_Navigator>
  );
}
