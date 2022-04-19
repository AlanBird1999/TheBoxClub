import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
interface profileProps {
  navigation: any;
}

export default function ProfileScreen(props: profileProps) {
  var loading = true;
  var [userEmail, setUserEmail] = useState("Loading");
  Auth.currentUserInfo()
    .then((userInfo) => {
      setUserEmail(userInfo.attributes.email);
    })
    .catch((error) => {
      loading = false;
      Alert.alert("Error getting user details", error.message, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/default-box.png")}
      ></Image>
      <Text>Name: {userEmail || "Loading ..."}</Text>
      <TouchableOpacity style={styles.logoutButton}>
        <Text
          style={styles.logoutText}
          onPress={() => logout(props.navigation)}
        >
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function logout(navigation: any) {
  Auth.signOut()
    .then(() => {
      Alert.alert("Success", "Successfully logged out", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    })
    .catch((error) => {
      Alert.alert("Error", error.message, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "#A1CAF1",
    borderRadius: 20,
    padding: 10,
    width: 75,
  },
  logoutText: {
    color: "#FFFFFF",
  },
  container: {
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
});
