/* This file will be changed to ONLY perform logins */

import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import AWSConfig from "../aws-exports";

Amplify.configure(AWSConfig);

var state = {
  username: "",
  password: "",
  confirmation: "",
};

function changeText(key: string, value: string) {
  if (key == "username") {
    state.username = value;
  } else if (key == "password") {
    state.password = value;
  } else if (key == "confirmation") {
    state.confirmation = value;
  }
}

function login() {
  var logIn = new Promise((resolve, reject) => {
    Auth.signIn;
  });
  Alert.alert("Login Pressed!", "You pressed the Login button", [
    {
      text: "OK",
      style: "cancel",
    },
  ]);
}

function signUp() {
  var registerUser = new Promise((resolve, reject) => {
    Auth.signUp({
      username: state.username,
      password: state.password,
      attributes: {
        email: state.username,
      },
    });
  });

  registerUser
    .then(() => {
      Alert.alert(
        "Now let's confirm",
        "Check your email for a verification code",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
      Auth.confirmSignUp(state.username, state.confirmation);
    })
    .catch((error) => {
      Alert.alert("Sign Up Error", error, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

function confirmSignUp() {
  var confirm = new Promise((resolve, reject) => {
    Auth.confirmSignUp(state.username, state.confirmation);
  });

  confirm
    .then(() => {
      Alert.alert(
        "Now let's confirm",
        "Check your email for a verification code",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    })
    .catch((error) => {
      Alert.alert("Error in confirmation code", error, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>B O X I E</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        onChangeText={(value) => changeText("username", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={(value) => changeText("password", value)}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp} style={styles.button}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Confirmation Code (for sign up)"
        keyboardType="default"
        onChangeText={(value) => changeText("confirmation", value)}
      />
      <TouchableOpacity onPress={confirmSignUp} style={styles.button}>
        <Text>Confirm Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 45,
    alignSelf: "center",
  },
});
