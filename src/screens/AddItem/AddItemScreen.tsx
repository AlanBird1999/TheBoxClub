import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { API } from "aws-amplify";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import ImagePicker from "../../components/ImagePicker";

interface addItemProps {
  navigation: any;
  route: any;
}

export default function AddItemScreen(props: addItemProps) {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedContainer, setSelectedConatainer] = useState(0);
  const [itemName, onChangeName] = useState("");
  const [itemDescription, onChangeDescription] = useState("");

  const renderRoomList = () => {
    return Object.keys(props.route.params.Places).map(
      (key: string, index: number) => {
        return (
          <Picker.Item
            label={props.route.params.Places[index].pName}
            value={props.route.params.Places[index]}
            key={index}
          ></Picker.Item>
        );
      }
    );
  };

  const renderContainerList = () => {
    if (!props.route.params.Places[0]) {
      return;
    }
    return Object.keys(props.route.params.Places[selectedRoom].containers).map(
      (key: string, index: number) => {
        return (
          <Picker.Item
            label={
              props.route.params.Places[selectedRoom].containers[index].cName
            }
            value={props.route.params.Places[selectedRoom].containers[index]}
            key={index}
          ></Picker.Item>
        );
      }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Item name</Text>
      <TextInput
        onChangeText={onChangeName}
        style={styles.input}
        placeholder="Item name"
      />
      <Text style={styles.text}>Item description</Text>
      <TextInput
        onChangeText={onChangeDescription}
        multiline={true}
        style={styles.multyInput}
        placeholder="Item description"
        numberOfLines={4}
      />
      <Text style={styles.text}>Room</Text>
      <Picker
        selectedValue={props.route.params.Places[selectedRoom]}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedRoom(itemIndex);
        }}
      >
        {renderRoomList()}
      </Picker>
      <Text style={styles.text}>Container</Text>
      <Picker
        selectedValue={
          props.route.params.Places[selectedRoom]?.containers[selectedContainer]
        }
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedConatainer(itemIndex);
        }}
      >
        {renderContainerList()}
      </Picker>
      <ImagePicker></ImagePicker>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          saveItem(
            props.route.params.Places[selectedRoom],
            props.route.params.Places[selectedRoom]?.containers[
              selectedContainer
            ],
            itemName,
            itemDescription,
            props.navigation
          )
        }
      >
        <Text>Save Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

async function saveItem(
  placeProps: any,
  containerProps: any,
  itemName: string,
  itemDescription: string,
  navigation: any
) {
  if (!itemName || !itemDescription || !containerProps || !placeProps) {
    Alert.alert(
      "Error with submitting",
      "Item must have a name, description and valid container and place ",
      [
        {
          text: "OK",
          style: "cancel",
        },
      ]
    );
    return;
  }

  const itemDetails = {
    iName: itemName,
    description: itemDescription,
    containerID: containerProps.id,
  };
  await API.graphql({
    query: `mutation CreateItem(
      $input: CreateItemInput!
      $condition: ModelItemConditionInput
    ) {
      createItem(input: $input, condition: $condition) {
        id
        description
        iName
        containerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }`,
    variables: { input: itemDetails },
  });

  Alert.alert("Successfully created item", "Item name: " + itemName, [
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

  //TODO need to reset stack navigator
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    height: 150,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
    backgroundColor: "white",
  },
  multyInput: {
    backgroundColor: "white",
    height: 60,
    margin: 10,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    textAlignVertical: "top",
  },
  text: {
    margin: 10,
    marginBottom: 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
    marginBottom: 30,
  },
});
