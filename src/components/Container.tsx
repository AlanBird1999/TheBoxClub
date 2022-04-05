import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Amplify from "aws-amplify";
import AWSConfig from "../aws-exports";
import { useNavigation } from "@react-navigation/native";

Amplify.configure(AWSConfig);

interface containerProps {
  name: string;
  navigation: any;
}

export default function Container(props: containerProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => openItem(props.name)}
    >
      <Text style={styles.roomName}>{props.name}</Text>
    </TouchableOpacity>
  );
}

function openItem(name: string) {}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    margin: 10,
  },
  roomName: {
    fontSize: 20,
    color: "white",
  },
});
