import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Image, Text, Alert } from "react-native";
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
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/BOXIELogo.png")}
      ></Image>
      <Text style={styles.text}>Username/Email: {userEmail || "Loading ..."}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changePassword(props.navigation)}
      >
        <Text style={styles.text}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => logout(props.navigation)}
      >
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function changePassword(navigation: any) {
  navigation.navigate("ChangePassword");
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
  logoutText: {
    color: "#FFFFFF",
  },
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#547C7D",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: 400,
  },
  text: {
    color: "lightblue",
    fontSize: 25,
  },
});
