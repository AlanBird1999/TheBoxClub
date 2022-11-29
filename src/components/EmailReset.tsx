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

export default function EmailResetScreen(props: resetProps) {
  const [newEmail, onChangeNewEmail] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Reset your BOXIE email/username</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                onChangeNewEmail(text);
              }}
              placeholder="Enter New Email Address"
              keyboardType="default"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => updateEmail(newEmail)}
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

function updateEmail(newEmail: string) {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      Auth.updateUserAttributes(user, {
        email: newEmail,
      })
        .then((result) => {
          Alert.alert(
            "Email Update",
            "Successfully updated email to " + newEmail,
            [
              {
                text: "OK",
                style: "cancel",
              },
            ]
          );
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
      Alert.alert(
        "Error",
        "An error has occured retreiving your user detials.",
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
