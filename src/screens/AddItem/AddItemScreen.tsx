import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { API, Storage } from "aws-amplify";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import ImagePicker from "../../components/ImagePicker";
import { Buffer } from "buffer";

interface addItemProps {
  navigation: any;
  route: any;
}

export default function AddItemScreen(props: addItemProps) {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedContainer, setSelectedConatainer] = useState(0);
  const [itemName, onChangeName] = useState("");
  const [itemDescription, onChangeDescription] = useState("");
  const [image, setImage] = useState(null);

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
      <Text style={styles.title}>Add New Item</Text>
      <Text style={styles.text}>Item name</Text>
      <TextInput
        onChangeText={onChangeName}
        style={styles.input}
        placeholder="Enter item name here"
      />
      <Text style={styles.text}>Item description</Text>
      <TextInput
        onChangeText={onChangeDescription}
        multiline={true}
        style={styles.multyInput}
        placeholder="Enter item description here"
        numberOfLines={4}
      />
      <Text style={styles.text}>Select Room</Text>
      <Picker
        selectedValue={props.route.params.Places[selectedRoom]}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedRoom(itemIndex);
        }}
      >
        {renderRoomList()}
      </Picker>
      <Text style={styles.text}>Select Container</Text>
      <Picker
        selectedValue={
          props.route.params.Places[selectedRoom]?.containers[selectedContainer]
        }
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedConatainer(itemIndex);
        }}
      >
        {renderContainerList()}
      </Picker>
      <ImagePicker
        upload={(imageUri: any) => {
          setImage(imageUri);
        }}
      />
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
            props.navigation,
            image
          )
        }
      >
        <Text style={styles.text}>Save Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

async function saveItem(
  placeProps: any,
  containerProps: any,
  itemName: string,
  itemDescription: string,
  navigation: any,
  imageUri: any
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

  const uploadResult = await pathToImageFile(itemName, imageUri);

  let url;
  if (uploadResult) {
    url = uploadResult.key;
  }

  const itemDetails = {
    iName: itemName,
    description: itemDescription,
    containerID: containerProps.id,
    photo: url,
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

async function pathToImageFile(iName: string, imageUri: any) {
  try {
    let imageName = Buffer.from(iName + Date.now(), "binary").toString(
      "base64"
    );
    const response = await fetch(imageUri);
    const blob = await response.blob();
    return await Storage.put(imageName, blob, {
      contentType: "image/jpeg",
      expires: new Date("2023-1-1"),
    });
  } catch (err) {
    console.log("Error uploading file:", err);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#547C7D",
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
  multyInput: {
    height: 100,
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
    backgroundColor: "white",
  },
});
