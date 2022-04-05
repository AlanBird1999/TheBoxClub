import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Container_Screen from "./ContainerScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function ItemNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Rooms" component={HomeScreen} />
      <Stack.Screen name="ContainerScreen" component={Container_Screen} />
    </Stack.Navigator>
  );
}
