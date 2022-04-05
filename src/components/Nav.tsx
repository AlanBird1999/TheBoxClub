import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CScanner from "./CScanner";

const Tab = createBottomTabNavigator();

export function Nav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

// import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import Amplify from "aws-amplify";
// import AWSConfig from "../aws-exports";
// import { useNavigation } from "@react-navigation/native";

// interface navProps {
//   navigation: any;
// }

// export default function Nav(props: navProps) {
//   return (
//     <View style={styles.navBar}>
//       <TouchableOpacity onPress={() => navigateTo(props.navigation, "Home")}>
//         <Text style={styles.screenName}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.navBar}
//         onPress={() => navigateTo(props.navigation, "Scanner")}
//       >
//         <Text style={styles.screenName}>Scanner</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function navigateTo(nav: any, screen: string) {
//   nav.navigate(screen);
// }

// const styles = StyleSheet.create({
//   navBar: {
//     height: 150,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "black",
//     margin: 10,
//   },
//   screenName: {
//     borderRadius: 20,
//     fontSize: 20,
//     color: "white",
//     backgroundColor: "gray",
//   },
// });
