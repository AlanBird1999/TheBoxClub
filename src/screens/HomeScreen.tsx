import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Amplify, { Auth } from "aws-amplify";
import AWSConfig from "../aws-exports";

import Room from '../components/Room';

Amplify.configure(AWSConfig);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Room></Room>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
});
