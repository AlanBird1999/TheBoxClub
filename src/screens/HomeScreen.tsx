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
            containers={data}
          ></Room>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    key: 1,
  },
  {
    name: "Storage Room",
    key: 2,
  },
  {
    name: "Attic",
    key: 3,
  },
  {
    name: "Garage",
    key: 4,
  },
  {
    name: "Spare Room",
    key: 5,
  },
  {
    name: "The Crypt",
    key: 6,
  },
  {
    name: "Grandma's Attic",
    key: 7,
  },
  {
    name: "Fruit Cellar",
    key: 8,
  },
  {
    name: "Shed",
    key: 9,
  },
];
