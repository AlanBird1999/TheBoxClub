import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home_Screen from "./src/screens/HomeScreen";
import Login_Screen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App_Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login_Screen} />
        <Stack.Screen name="Home" component={Home_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
