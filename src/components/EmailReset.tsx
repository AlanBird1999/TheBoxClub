import {
    View,
    SafeAreaView,
    Image,
    ImageURISource,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
  } from "react-native";
  
  import { Amplify, Storage } from "aws-amplify";
  import { useState } from "react";
  import { getAmplifyUserAgent } from "@aws-amplify/core";
  
  import awsconfig from "../aws-exports";
    
  Amplify.configure(awsconfig);
  
  interface resetProps {
    navigation: any;
  }
  
  export default function EmailResetScreen(props: resetProps) {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Email reset page!</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Text style={styles.text}>Back to Profile</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
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