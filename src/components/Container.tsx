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
  cName: string;
  navigation: any;
  items: { name: string; description: string; image?: ImageURISource }[];
}

export default function Container(props: containerProps) {
  console.log(props);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => openItems(props.items, props.navigation)}
    >
      <Text style={styles.roomName}>{props.cName}</Text>
    </TouchableOpacity>
  );
}

function openItems(items: any, navigation: any) {
  navigation.navigate("ItemScreen", { items });
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
