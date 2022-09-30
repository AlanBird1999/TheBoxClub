import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home_Screen from "./src/screens/HomeScreen";
import Login_Screen from "./src/screens/LoginScreen";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { TabNavigator } from "./src/screens/TabNavigator";
import Container_Screen from "./src/screens/ContainerScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App_Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login_Screen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabNav" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
