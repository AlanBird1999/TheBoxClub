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
        source={require("../../assets/default-box.png")}
      ></Image>
      <Text style={styles.text}>Username: {userEmail || "Loading ..."}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => logout(props.navigation)}
      >
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => printQRCodes(props.navigation)
        }
      >
        <Text style={styles.text}>Print All QR Codes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function printQRCodes(navigation:any) {
  // return fetch("https://q3zo38dhlg.execute-api.us-east-1.amazonaws.com/default/generateAndSaveQRCode", {
  //   method:'POST',
  //   headers: {
  //     'Content-Encoding':'base64'
  //   },
  //   body: JSON.stringify({
  //     "containers": [
  //         {
  //             containerID: "apple.com",
  //             containerName: "AppleCONT",
  //             roomName: "AppleROOM"
  //         }
  //     ]
  // })
  // })
  // .then((response) => response.blob())
  // .then((json) => console.log(base64.decode(json)))
  // .catch((error) => console.error("API Call not successful", error))

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "containers": [
      {
        "containerID": "apple.com",
        "containerName": "AppleCONT",
        "roomName": "AppleROOM"
      }
    ]
  });

  var requestOptionss = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://q3zo38dhlg.execute-api.us-east-1.amazonaws.com/default/generateAndSaveQRCode", {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
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
    height: 100,
    width: 100,
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
