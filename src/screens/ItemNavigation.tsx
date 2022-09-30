<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Item_Screen from "./ItemScreen";
import Item_View_Screen from "../components/ItemView";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function ItemNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Rooms" component={HomeScreen} />
      <Stack.Screen name="ContainerScreen" component={Container_Screen} />
      <Stack.Screen name="ItemScreen" component={Item_Screen} />
      <Stack.Screen name="ItemViewScreen" component={Item_View_Screen} />
    </Stack.Navigator>
  );
}
=======
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Item_Screen from "./ItemScreen";
import Item_View_Screen from "../components/ItemView";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function ItemNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Rooms" component={HomeScreen} />
      <Stack.Screen name="ItemScreen" component={Item_Screen} />
      <Stack.Screen name="ItemViewScreen" component={Item_View_Screen} />
    </Stack.Navigator>
  );
}
>>>>>>> 7b2323de3888acef9442f4e31e33b4b788a2df68
