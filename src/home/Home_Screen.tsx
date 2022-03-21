import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";

interface loginProps {
  navigation: any;
}

export default function Home_Screen(props: loginProps) {
  return (
    <KeyboardAvoidingView style={styles.content_container} behavior="padding">
      <Text>Home Page</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  login_page_boxie: {
    fontSize: 50,
    position: "absolute",
    top: "33%",
  },
  signin_signup: {
    position: "absolute",
    top: "55%",
  },
});
