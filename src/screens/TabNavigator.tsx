import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from "../screens/LoginScreen";
import CScanner from "../components/CScanner";
import HomeScreen from "./HomeScreen";
import ItemNavigation from "./ItemNavigation";
import AddItemScreen from "./AddItem/AddItemScreen";
import AddItemNavigation from "./AddItem/AddItemNavigator";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="AddItemNavigation"
        component={AddItemNavigation}
        options={{
          tabBarLabel: () => null,
          tabBarButton: () => null,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Home"
        component={ItemNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={CScanner}
        options={{
          tabBarLabel: "Scan",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
