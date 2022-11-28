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
      <Text style={styles.title}>Add New Room</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter room name here"
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
        <Text style={styles.text}>Save Room</Text>
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
    flex: 1,
    backgroundColor: "#547C7D",
    justifyContent: "center",
  },
  text: {
    color: "lightblue",
    fontSize: 25,
  },
  scrollv: {
    flexGrow: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: 400,
  },
  title: {
    fontSize: 45,
    alignSelf: "center",
    color: "lightblue",
  },
  picker: {
    paddingBottom: 30,
  }
});
