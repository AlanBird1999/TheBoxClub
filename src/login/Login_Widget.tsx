import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default class Login_Widget extends Component {
  login() {
    //login logic here
  }
  signUp() {
    //sign up logic here
  }

  render() {
    return (
      <View style={styles.background_main_container}>
        <TextInput
          style={styles.input_field}
          placeholder="email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input_field}
          placeholder="password"
          keyboardType="default"
          secureTextEntry={true}
        />
        <Pressable onPress={this.login} style={styles.buttons}>
          <Text>Login</Text>
        </Pressable>
        <Pressable onPress={this.signUp} style={styles.buttons}>
          <Text>Sign up</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background_main_container: {
    width: 300,
    height: 300,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  input_field: {
    margin: 10,
    width: 250,
    height: 60,
    backgroundColor: "white",
    zIndex: 1000,
    padding: 10,
    borderWidth: 1,
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "gray",
    width: 250,
    padding: 10,
    margin: 10,
  },
  text: {},
});
