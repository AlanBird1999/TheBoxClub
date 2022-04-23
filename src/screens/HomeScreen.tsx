import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import AWSConfig from "../aws-exports";

import Room from "../components/Room";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import * as subscriptions from "../graphql/subscriptions";
import { useState } from "react";
import { API } from "aws-amplify";

Amplify.configure(AWSConfig);

interface homeProps {
  navigation: any;
}

export default function HomeScreen(props: homeProps) {
  const [data, setData] = useState(null);
  Auth.currentUserInfo()
    .then(async (userInfo) => {
      console.log("user info in home screen", userInfo);
      const dataUser: any = await API.graphql({
        query: queries.getUser,
        variables: { id: userInfo.id },
      });
      console.log(dataUser);
      if (!dataUser.data.getUser) {
        const residenceDetails = {
          rName: userInfo.username,
        };
        const newResidence = await API.graphql({
          query: mutations.createResidence,
          variables: { input: residenceDetails },
        });
        const userDeatails = {
          id: userInfo.id,
          UserName: userInfo.username,
        };

        const newUser = await API.graphql({
          query: mutations.createUser,
          variables: { input: userDeatails },
        });
        console.log("newUser", newUser);
        //TODO: right around here if we want the ability to have multiple users to a single residence
        //this is where we can prompt them to give a residence head
      }
    })
    .catch((error) => {
      console.log("error", error);
      Alert.alert("Error getting user details", error.message, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addItem(props.navigation, data)}
        >
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function addItem(navigation: any, data: any) {
  navigation.navigate("AddItemNavigation", data);
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    alignItems: "center",
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

// const data = [
//   {
//     name: "Basement",
//     containers: [
//       {
//         name: "Box 1",
//         key: 1,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//       {
//         name: "Box 2",
//         key: 2,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//     ],
//     key: 1,
//   },
//   {
//     name: "Storage Room",
//     containers: [
//       {
//         name: "Box 1",
//         key: 1,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//       {
//         name: "Box 2",
//         key: 2,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//       {
//         name: "Box 3",
//         key: 3,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//       {
//         name: "Box 4",
//         key: 4,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//     ],
//     key: 2,
//   },
//   {
//     name: "Attic",
//     containers: [
//       {
//         name: "Christmas Box",
//         key: 1,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//       {
//         name: "Haloween",
//         key: 2,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//     ],
//     key: 3,
//   },
//   {
//     name: "Garage",
//     containers: [
//       {
//         name: "Tool Box",
//         key: 1,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//       {
//         name: "Car parts",
//         key: 2,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//     ],
//     key: 4,
//   },
//   {
//     name: "Spare Room",
//     containers: [
//       {
//         name: "Decorations",
//         key: 1,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//       {
//         name: "Blankets",
//         key: 2,
//         items: [
//           { name: "item 1", description: "item 1 description", key: 1 },
//           { name: "item 2", description: "item 2 description", key: 2 },
//         ],
//       },
//     ],
//     key: 5,
//   },
//   {
//     name: "The Crypt",
//     containers: [],
//     key: 6,
//   },
//   {
//     name: "Grandma's Attic",
//     containers: [
//       { name: "Box 1", key: 1, items: [] },
//       { name: "Box 2", key: 2, items: [] },
//     ],
//     key: 7,
//   },
//   {
//     name: "Fruit Cellar",
//     containers: [
//       { name: "Orange", key: 1, items: [] },
//       { name: "Apples", key: 2, items: [] },
//     ],
//     key: 8,
//   },
//   {
//     name: "Shed",
//     containers: [
//       { name: "Orange", key: 1, items: [] },
//       { name: "Apples", key: 2, items: [] },
//     ],
//     key: 9,
//   },
// ];
