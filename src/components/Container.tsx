import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageURISource,
} from "react-native";
import Amplify from "aws-amplify";
import AWSConfig from "../aws-exports";

Amplify.configure(AWSConfig);

interface containerProps {
  pName: string;
  cName: string;
  navigation: any;
  items: { name: string; description: string; image?: string }[];
}

export default function Container(props: containerProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => openItems(props, props.navigation)}
    >
      <Text style={styles.roomName}>{props.cName}</Text>
    </TouchableOpacity>
  );
}

function openItems(props: containerProps, navigation: any) {
  navigation.navigate("ItemScreen", {
    items: props.items,
    container: props.cName,
    room: props.pName,
  });
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
