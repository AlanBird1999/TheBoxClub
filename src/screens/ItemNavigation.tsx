import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Item_Screen from "./ItemScreen";
import Item_View_Screen from "../components/ItemView";
import PasswordResetScreen from "../components/PasswordReset";
import ForgotPasswordScreen from "../components/ForgotPassword";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function ItemNavigation(props: any) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Rooms"
        component={HomeScreen}
        listeners={({ navigation }) => ({
          focus: () =>
            navigation.setParams({
              containerId: props.route.params?.containerId,
            }),
          blur: () => {
            props.navigation.setParams({
              containerId: null,
            });
          },
        })}
      />
      <Stack.Screen name="ItemScreen" component={Item_Screen} />
      <Stack.Screen name="ItemViewScreen" component={Item_View_Screen} />
      <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
    </Stack.Navigator>
  );
}
