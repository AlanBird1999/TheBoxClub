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

export default function PasswordResetScreen(props: resetProps) {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [securityCode, onChangeSecurityCode] = useState("");
  const [oldPassword, onChangeOldPassword] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Reset your BOXIE password</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                onChangeOldPassword(text);
              }}
              placeholder="Enter Old Password"
              keyboardType="default"
              secureTextEntry={true}
            />
            <View>
              <Button
                color={"bisque"}
                title="Forgot password? Click here"
                onPress={() => props.navigation.navigate("Profile")}
              />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                onChangeNewPassword(text);
              }}
              placeholder="Enter New Password"
              keyboardType="default"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => updatePassword(oldPassword, newPassword, props)}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            <View>
              <Button
                color={"bisque"}
                title="Here by accident? Back to Profile"
                onPress={() => props.navigation.navigate("Profile")}
              />
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

function updatePassword(oldPassword: string, newPassword: string, props: any) {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      Auth.changePassword(user, oldPassword, newPassword)
        .then((result) => {
          Alert.alert("Success", "You have successfully reset your password!", [
            {
              text: "OK",
              style: "cancel",
            },
          ]);
          props.navigation.navigate("Profile");
        })
        .catch((err) => {
          Alert.alert(
            "Error",
            "An error has occured. Check that your current password matches.",
            [
              {
                text: "OK",
                style: "cancel",
              },
            ]
          );
        });
    })
    .catch((err) => {
      Alert.alert("Error", err, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
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
