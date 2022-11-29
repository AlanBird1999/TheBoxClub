import {
  TextInput,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { useState } from "react";

import { Amplify, Auth } from "aws-amplify";

import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

interface resetProps {
  navigation: any;
}

export default function ForgotPasswordScreen(props: resetProps) {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [securityCode, onChangeSecurityCode] = useState("");
  const [email, onChangeEmail] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Forgot your password?</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                onChangeEmail(text);
              }}
              placeholder="Enter Email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize={'none'}
              secureTextEntry={false}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => resetPassword(email, props)}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            <View>
              <Button
                color={"bisque"}
                title="Here by accident? Return to login"
                onPress={() => props.navigation.navigate("Login")}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate("ResetPasswordCode")}
            >
              <Text style={styles.text}>Have a reset password code?</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

export function PasswordCodeScreen(props: resetProps) {
  const [code, onChangePasswordCode] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [email, onChangeEmail] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Reset your password</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                onChangeEmail(text);
              }}
              placeholder="Enter Email"
              keyboardType="default"
              secureTextEntry={false}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                onChangePasswordCode(text);
              }}
              placeholder="Enter code"
              keyboardType="default"
              secureTextEntry={false}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                onChangeNewPassword(text);
              }}
              placeholder="Enter new password"
              keyboardType="default"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                submitPasswordCode(newPassword, code, email, props)
              }
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            <View>
              <Button
                color={"bisque"}
                title="Here by accident? Return to login"
                onPress={() => props.navigation.navigate("Login")}
              />
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

function submitPasswordCode(
  newPassword: string,
  passwordCode: string,
  email: string,
  props: any
) {
  Auth.forgotPasswordSubmit(email, passwordCode, newPassword)
    .then((result) => {
      console.log(result);
      Alert.alert("Success", "You have successfully reset your password!", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
      props.navigation.navigate("Login");
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

function resetPassword(email: string, props: any) {
  Auth.forgotPassword(email)
    .then((result) => {
      console.log(result);
      Alert.alert(
        "Password reset code sent",
        "Please check your email for the one time code that will allow you to reset your password.",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    })
    .catch(() => {
      Alert.alert(
        "Password reset code sent",
        "Please check your email for the one time code that will allow you to reset your password.",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#547C7D",
    justifyContent: "center",
  },
  text: {
    color: "lightblue",
    fontSize: 25,
  },
  scrollv: {
    flexGrow: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: 400,
  },
  title: {
    fontSize: 45,
    alignSelf: "center",
    color: "lightblue",
  },
});
