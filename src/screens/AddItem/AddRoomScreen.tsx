import { Picker } from "@react-native-picker/picker";
import { API } from "aws-amplify";
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as mutations from "../../graphql/mutations";

interface addRoomProps {
  navigation: any;
  route: any;
}

export default function AddItemRoom(props: addRoomProps) {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Room Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Room Name"
        onChangeText={onChangeText}
        value={text}
      />
      {/* <Text>Room Icon</Text>
      <Picker style={styles.input} placeholder="none">
        <Picker.Item label="Box"></Picker.Item>
        <Picker.Item label="House"></Picker.Item>
      </Picker> 
      TODO: Room Icon functionality yet to come*/}
      <TouchableOpacity
        onPress={() => saveRoom(props.route.params, text, props.navigation)}
        style={styles.button}
      >
        <Text>Save Room</Text>
      </TouchableOpacity>
    </View>
  );
}

async function saveRoom(
  residenceProps: any,
  placeName: string,
  navigation: any
) {
  const placeDetails = {
    pName: placeName,
    residenceID: residenceProps.id,
  };
  const newResidence: any = await API.graphql({
    query: mutations.createPlace,
    variables: { input: placeDetails },
  });

  Alert.alert("Successfully created room", "Room name: " + placeName, [
    {
      text: "OK",
      style: "cancel",
    },
  ]);
  navigation.reset({
    index: 0,
    routes: [{ name: "SelectItemType" }],
  });
  navigation.navigate("Home");
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
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
  },
});
