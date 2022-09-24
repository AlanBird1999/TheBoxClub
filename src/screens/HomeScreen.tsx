import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BOXIE</Text>
      <FlatList
        numColumns={1}
        data={data}
        renderItem={({ item }) => (
          <Room
            name={item.name}
            nav={props.navigation}
            containers={item.containers}
          ></Room>
        )}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addItem(props.navigation)}
        >
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function addItem(navigation: any) {
  navigation.navigate("AddItemNavigation", data);
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#547C7D',
  },
  title: {
    fontSize: 35,
    color: 'lightblue',
    padding: 25,
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
  buttonView: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#A1CAF1",
  },
  icon: {
    fontSize: 40,
    color: "white",
  },
});

const data = [
  {
    name: "Basement",
    containers: [
      {
        name: "Winter clothes",
        key: 1,
        items: [
          { name: "Eric's Coat", description: "item 1 description", key: 1 },
          { name: "Gloves", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Yard games",
        key: 2,
        items: [
          { name: "spikeball", description: "item 1 description", key: 1 },
          { name: "bocce ball", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Board games",
        key: 3,
        items: [
          { name: "Five Tribes", description: "item 1 description", key: 1 },
          { name: "Azul", description: "item 2 description", key: 2 },
        ],
      },
    ],
    key: 1,
  },
  {
    name: "Storage Room",
    containers: [
      {
        name: "Box 1",
        key: 1,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Box 2",
        key: 2,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Box 3",
        key: 3,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Box 4",
        key: 4,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
    ],
    key: 2,
  },
  {
    name: "Attic",
    containers: [
      {
        name: "Christmas Box",
        key: 1,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Haloween decor",
        key: 2,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
    ],
    key: 3,
  },
  {
    name: "Garage",
    containers: [
      {
        name: "Tool Box",
        key: 1,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Car parts",
        key: 2,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Bicycles",
        key: 3,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
    ],
    key: 4,
  },
  {
    name: "Spare Room",
    containers: [
      {
        name: "Decorations",
        key: 1,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Blankets",
        key: 2,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
    ],
    key: 5,
  },
  {
    name: "The Crypt",
    containers: [
      {
        name: "Ancestor 1",
        key: 1,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Ancestor 2",
        key: 2,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Ancestor 3",
        key: 3,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
      {
        name: "Ancestor 4",
        key: 4,
        items: [
          { name: "item 1", description: "item 1 description", key: 1 },
          { name: "item 2", description: "item 2 description", key: 2 },
        ],
      },
    ],
    key: 6,
  },
  {
    name: "Grandma's Attic",
    containers: [
      { name: "Box 1", key: 1, items: [] },
      { name: "Box 2", key: 2, items: [] },
    ],
    key: 7,
  },
  {
    name: "Fruit Cellar",
    containers: [
      { name: "Orange", key: 1, items: [] },
      { name: "Apples", key: 2, items: [] },
    ],
    key: 8,
  },
  {
    name: "Shed",
    containers: [
      {
        name: "Gardening tools",
        key: 1,
        items: [
          { name: "trowels and buckets", description: "item 1 description", key: 1 },
          { name: "shovels and chainsaws", description: "item 2 description", key: 2 },
        ],
      },
      { name: "Unholy number of critters", key: 2, items: [] },
    ],
    key: 9,
  },
];
