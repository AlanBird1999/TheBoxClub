import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet, TextInput, Text } from "react-native";

interface addRoomProps {
  navigation: any;
}

export default function AddItemRoom(props: addRoomProps) {
  return (
    <View style={styles.container}>
      <Text>Room Name</Text>
      <TextInput style={styles.input} placeholder="Room Name" />
      <Text>Room Icon</Text>
      <Picker style={styles.input} placeholder="none">
        <Picker.Item label="Box"></Picker.Item>
        <Picker.Item label="House"></Picker.Item>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
});
