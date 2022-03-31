import { StyleSheet, Text, View } from "react-native";
import Amplify from "aws-amplify";
//import "@aws-amplify/ui-react/styles.css";
import awsconfig from "./src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);
export default function App() {
  return (
    <View>
      <Text>Hello world finally</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
