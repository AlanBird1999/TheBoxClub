import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Amplify, { Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

interface addItemProps {
  navigation: any;
  route: any;
}

export default function AddItemScreen(props: addItemProps) {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedContainer, setSelectedConatainer] = useState(0);
  const [asset, setAsset] = useState("" as any);
  const [progressText, setProgressText] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const fetchResourceFromURI = async (uri: RequestInfo) => {
    console.log("about to request blob");
    const response = await fetch(uri);
    console.log("Blob Response", response);
    const blob = await response.blob();
    return blob;
  };
  const uploadResource = async () => {
    if (isLoading) return;
    setisLoading(true);
    const img = await fetchResourceFromURI(asset.uri);
    return Storage.put(asset.uri, img, {
      level: "public",
      contentType: asset.type,
      progressCallback(uploadProgress) {
        setProgressText(
          `Progress: ${Math.round(
            (uploadProgress.loaded / uploadProgress.total) * 100
          )} %`
        );
        console.log(
          `Progress: ${uploadProgress.loaded}/${uploadProgress.total}`
        );
      },
    })
      .then((res) => {
        setProgressText("Upload Done: 100%");
        setAsset(null);
        setisLoading(false);
        Storage.get(res.key)
          .then((result) => console.log(result))
          .catch((err) => {
            setProgressText("Upload Error");
            console.log(err);
          });
      })
      .catch((err) => {
        setisLoading(false);
        setProgressText("Upload Error");
        console.log(err);
      });
  };

  const selectFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setAsset(result.uri);
    }
  };

  const renderRoomList = () => {
    return Object.keys(props.route.params).map((key: string, index: number) => {
      return (
        <Picker.Item
          label={props.route.params[index].name}
          value={props.route.params[index]}
          key={index}
        ></Picker.Item>
      );
    });
  };

  const renderContainerList = () => {
    return Object.keys(props.route.params[selectedRoom].containers).map(
      (key: string, index: number) => {
        return (
          <Picker.Item
            label={props.route.params[selectedRoom].containers[index].name}
            value={props.route.params[selectedRoom].containers[index]}
            key={index}
          ></Picker.Item>
        );
      }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Item name</Text>
      <TextInput style={styles.input} placeholder="Item name" />
      <Text style={styles.text}>Item description</Text>
      <TextInput
        multiline={true}
        style={styles.multyInput}
        placeholder="Item description"
        numberOfLines={4}
      />
      <Text style={styles.text}>Room</Text>
      <Picker
        selectedValue={props.route.params[selectedRoom]}
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
          props.route.params[selectedRoom].containers[selectedContainer]
        }
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedConatainer(itemIndex);
        }}
      >
        {renderContainerList()}
      </Picker>
      <TouchableOpacity onPress={selectFile}>
        <Text style={styles.button}>SELECT {asset ? "ANOTHER" : ""} FILE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          uploadResource();
          saveItem();
        }}
      >
        <Text style={styles.button}>Save Item</Text>
      </TouchableOpacity>

      {asset ? (
        <Image source={{ uri: asset }} style={{ width: 200, height: 200 }} />
      ) : null}
      {/* {asset && (
        <>
          <TouchableOpacity onPress={() => setAsset("")}>
            <Text style={styles.cancelButton}>Remove Selected Image</Text>
          </TouchableOpacity>
        </>
      )} */}
    </ScrollView>
  );
}

function saveItem() {}

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
    fontSize: 20,
    color: "#fff",
    backgroundColor: "blue",
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#fff",
    color: "blue",
  },
  selectedImage: {
    width: 175,
    height: 200,
    marginTop: 20,
  },
});
