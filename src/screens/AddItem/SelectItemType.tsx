import {
  SafeAreaView,
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>What would you like to add?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo("AddRoomScreen", props.navigation)}
      >
        <Text style={styles.text}>Room</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo("AddContainerScreen", props.navigation)}
      >
        <Text style={styles.text}>Container</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo("AddItemScreen", props.navigation)}
      >
        <Text style={styles.text}>Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    backgroundColor: "#547C7D",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    color: 'lightblue',
    alignSelf: "center",
    paddingBottom: 10,
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: 400,
  },
  text: {
    color: 'lightblue',
    fontSize: 25,
  },
});
