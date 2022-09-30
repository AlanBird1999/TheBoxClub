import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
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
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="Container name"
      />
      <Text style={styles.text}>Room</Text>
      <Picker
        selectedValue={residence.Places[selectedRoom]}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedRoom(itemIndex);
        }}
      >
        {renderRoomList()}
      </Picker>
      <TouchableOpacity
        onPress={() =>
          saveContainer(
            residence.Places[selectedRoom],
            containerName,
            props.navigation
          )
        }
      >
        <Text>Save Container</Text>
      </TouchableOpacity>
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
  text: {
    margin: 10,
    marginBottom: 0,
  },
});
