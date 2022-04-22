import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

interface selectItemProps {
  navigation: any;
}

export default function SelectItemType(props: selectItemProps) {
  return (
    <View style={styles.container}>
      <Text>What would you like to add?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo("AddRoomScreen", props.navigation)}
      >
        <Text>Room</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo("AddContainerScreen", props.navigation)}
      >
        <Text>Container</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo("AddItemScreen", props.navigation)}
      >
        <Text>Item</Text>
      </TouchableOpacity>
    </View>
  );
}

function navigateTo(destination: string, navigation: any) {
  navigation.navigate(destination);
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 0,
    flex: 1,
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#A1CAF1",
  },
});
