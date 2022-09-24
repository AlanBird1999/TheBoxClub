import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageURISource,
} from "react-native";
import Amplify from "aws-amplify";
import AWSConfig from "../aws-exports";

Amplify.configure(AWSConfig);

interface itemProps {
  room: string,
  container: string,
  navigation: any;
  item: { name: string; description: string; image?: ImageURISource };
}

export default function Item(props: itemProps) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => openItemView(props.item, props.navigation)}
    >
      <Text style={styles.itemName}>{props.item.name}</Text>
    </TouchableOpacity>
  );
}

function openItemView(item: any, navigation: any) {
  navigation.navigate("ItemViewScreen", item);
}

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    margin: 10,
  },
  itemName: {
    fontSize: 20,
    color: "white",
  },
});
