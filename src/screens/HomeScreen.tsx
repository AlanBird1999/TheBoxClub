import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import AWSConfig from "../aws-exports";

import Room from "../components/Room";

Amplify.configure(AWSConfig);

interface homeProps {
  navigation: any;
}

export default function HomeScreen(props: homeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <Room
            name={item.name}
            nav={props.navigation}
            containers={item.containers}
          ></Room>
        )}
      />
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

const data = [
  {
    name: "Basement",
    containers: [{ name: "Box 1" }, { name: "Box 2" }],
    key: 1,
  },
  {
    name: "Storage Room",
    containers: [
      { name: "Box 1" },
      { name: "Box 2" },
      { name: "Box 3" },
      { name: "Box 4" },
    ],
    key: 2,
  },
  {
    name: "Attic",
    containers: [{ name: "Christmas Box" }, { name: "Haloween" }],
    key: 3,
  },
  {
    name: "Garage",
    containers: [{ name: "Tool Box" }, { name: "Car parts" }],
    key: 4,
  },
  {
    name: "Spare Room",
    containers: [{ name: "Decorations" }, { name: "Blankets" }],
    key: 5,
  },
  {
    name: "The Crypt",
    containers: [],
    key: 6,
  },
  {
    name: "Grandma's Attic",
    containers: [{ name: "Box 1" }, { name: "Box 2" }],
    key: 7,
  },
  {
    name: "Fruit Cellar",
    containers: [{ name: "Orange" }, { name: "Apples" }],
    key: 8,
  },
  {
    name: "Shed",
    containers: [{ name: "Orange" }, { name: "Apples" }],
    key: 9,
  },
];
