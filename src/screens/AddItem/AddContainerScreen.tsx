import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { API, container } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

interface addContainerProps {
  navigation: any;
  route: {
    params: any;
  };
}

export default function AddContainerScreen(props: addContainerProps) {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const residence = props.route.params;
  const [containerName, onChangeName] = useState("");
  const renderRoomList = () => {
    return Object.keys(residence.Places).map((key: string, index: number) => {
      return (
        <Picker.Item
          label={residence.Places[index].pName}
          value={residence.Places[index]}
          key={index}
        ></Picker.Item>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.container}>
      <Text style={styles.title}>Add New Container</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="Enter container name here"
      />
      <Text style={styles.text}>Select Room</Text>
      <Picker
        selectedValue={residence.Places[selectedRoom]}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedRoom(itemIndex);
        }}
      >
        {renderRoomList()}
      </Picker>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          saveContainer(
            residence.Places[selectedRoom],
            containerName,
            props.navigation
          )
        }
      >
        <Text style={styles.text}>Save Container</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

async function saveContainer(
  placeProps: any,
  containerName: string,
  navigation: any
) {
  // TODO Also need to check for a valid container
  if (!containerName) {
    Alert.alert("Error with submitting", "Container must have a name ", [
      {
        text: "OK",
        style: "cancel",
      },
    ]);
    return;
  }
  const containerDetails = {
    cName: containerName,
    placeID: placeProps.id,
  };
  await API.graphql({
    query: `mutation CreateContainer(
      $input: CreateContainerInput!
      $condition: ModelContainerConditionInput
    ) {
      createContainer(input: $input, condition: $condition) {
        id
        placeID
        Items {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }`,
    variables: { input: containerDetails },
  });

  Alert.alert(
    "Successfully created container",
    "Container name: " + containerName,
    [
      {
        text: "OK",
        style: "cancel",
      },
    ]
  );
  navigation.reset({
    index: 0,
    routes: [{ name: "SelectItemType" }],
  });
  navigation.navigate("Home");

  //TODO need to reset stack navigator
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
    backgroundColor: 'white',
  }
});
