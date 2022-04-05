import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Amplify from "aws-amplify";
import AWSConfig from "../aws-exports";

Amplify.configure(AWSConfig);

interface nameProps {
  name: string;
  nav: any;
  containers: any;
}

export default function Room(props: nameProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => openContainers(props.containers, props.nav)}
    >
      <Text style={styles.roomName}>{props.name}</Text>
    </TouchableOpacity>
  );
}

function openContainers(containers: any, nav: any) {
  nav.navigate("ContainerScreen", { containers });
}

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
