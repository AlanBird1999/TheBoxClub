import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddContainerScreen from "./AddContainerScreen";
import AddItemScreen from "./AddItemScreen";
import AddRoomScreen from "./AddRoomScreen";
import SelectItemType from "./SelectItemType";

const Stack = createNativeStackNavigator();
interface AddItemNavigationProps {
  navigation: any;
  route: any;
}

export default function AddItemNavigation(props: AddItemNavigationProps) {
  return (
    <Stack.Navigator
      initialRouteName="SelectItemType"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="SelectItemType" component={SelectItemType} />
      <Stack.Screen
        name="AddItemScreen"
        component={AddItemScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen name="AddRoomScreen" component={AddRoomScreen} />
      <Stack.Screen name="AddContainerScreen" component={AddContainerScreen} />
    </Stack.Navigator>
  );
}
