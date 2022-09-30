import { Picker } from "@react-native-picker/picker";
import { withSSRContext } from "aws-amplify";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";

import {
  ScrollView,
} from "react-native-gesture-handler";
import ImagePicker from "../../components/ImagePicker";

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
    <View>
    <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.text}>Item name</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter item name" 
      />
      <Text style={styles.text}>Item description</Text>
      <TextInput
        multiline={true}
        style={styles.multyInput}
        placeholder="Enter item description"
        numberOfLines={4}
      />
      <Text style={styles.text}>Room</Text>
      <Picker
        selectedValue={props.route.params[selectedRoom]}
        style={styles.picker_input}
        prompt={"select..."}
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
        prompt={"select..."}
        style={styles.picker_input}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedConatainer(itemIndex);
        }}
      >
        {renderContainerList()}
      </Picker>
      <Image
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          method: 'POST',
          headers: {
            Pragma: 'no-cache'
          },
          body: 'Your Body goes here'
        }}
        style={{ width: 400, height: 400, backgroundColor: 'white' }}
      />
      <ImagePicker></ImagePicker>
      <TouchableOpacity 
        onPress={() => saveItem()}
        style={styles.button}
      >
          <Text style={styles.text}>Save Item</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

function saveItem() {
  //Logic to save item goes here
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547C7D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
    width: 400,
    backgroundColor: 'white',
  },
  picker_input: {
    height: 200,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
    width: 400,
    backgroundColor: 'white',
  },
  multyInput: {
    height: 60,
    margin: 10,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    textAlignVertical: "top",
    width: 400,
    backgroundColor: 'white',
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
  scrollv: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
