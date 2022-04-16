import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

interface addItemProps {
  navigation: any;
  route: any;
}

export default function AddItemScreen(props: addItemProps) {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedContainer, setSelectedConatainer] = useState(0);

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
    <View style={styles.container}>
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
      <TouchableOpacity onPress={() => saveItem()}></TouchableOpacity>
    </View>
  );
}

function saveItem() {
  //Logic to save item goes here
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
});
