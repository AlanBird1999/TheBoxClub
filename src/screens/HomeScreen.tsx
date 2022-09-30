<<<<<<< HEAD
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
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

Amplify.configure(AWSConfig);

interface homeProps {
  navigation: any;
}

export default function HomeScreen(props: homeProps) {
  //TODO need some way to trigger reload based off props flag

  const [residenceData, setResidenceData] = useState(null);
  const [roomData, setRoomData] = useState(null);
  if (residenceData == null)
    Auth.currentUserInfo()
      .then(async (userInfo) => {
        const dataResidence: any = await API.graphql({
          query: `
          query ListResidences(
            $limit: Int
            $nextToken: String
          ) {
            listResidences(filter: { rName: { eq: "${userInfo.username}" }}, limit: $limit, nextToken: $nextToken) {
              items {
                id
                rName
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
          }`,
        });
        dataResidence.data.listResidences.items =
          dataResidence.data.listResidences.items.filter(
            (r: any) => !r._deleted
          );
        if (!dataResidence.data.listResidences.items[0]) {
          const residenceDetails = {
            rName: userInfo.username,
          };
          const newResidence: any = await API.graphql({
            query: mutations.createResidence,
            variables: { input: residenceDetails },
          });

          setResidenceData(newResidence.createResidence);
          //TODO: right around here if we want the ability to have multiple users to a single residence
          //this is where we can prompt them to give a residence head
        } else {
          setResidenceData(dataResidence);
        }
        const residence: any = dataResidence.data.listResidences.items[0];

        const allObjects = await getAllObjects(residence.id);
        setRoomData(allObjects);
        const populatedDataResidence: any = {
          Places: allObjects,
          id: residence.id,
          rName: residence.rName,
        };
        setResidenceData(populatedDataResidence);
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
      <Text style={styles.title}>BOXIE</Text>
      <FlatList
        numColumns={1}
        data={roomData}
        renderItem={({ item }) => (
          <Room
            name={item.pName}
            nav={props.navigation}
            containers={item.containers}
          ></Room>
        )}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addItem(props.navigation, residenceData)}
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

async function getAllObjects(residenceId: number): Promise<any> {
  const ojbectArray = [];
  const places: any = await API.graphql({
    query: `query ListPlaces(
      $limit: Int
      $nextToken: String
    ) {
      listPlaces(filter: {residenceID: {eq: "${residenceId}"}}, limit: $limit, nextToken: $nextToken) {
        items {
          id
          pName
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
    }`,
  });
  // Foreach place, get all containers
  for (const place of places.data.listPlaces.items) {
    const containers: any = await API.graphql({
      query: `query ListContainers(
        $limit: Int
        $nextToken: String
      ) {
        listContainers(filter: { placeID: { eq: "${place.id}" } }, limit: $limit, nextToken: $nextToken) {
          items {
            id
            cName
            placeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`,
    });
    const formattedContainers: any = [];

    for (const container of containers.data.listContainers.items) {
      const items: any = await API.graphql({
        query: `query ListItems(
          $limit: Int
          $nextToken: String
        ) {
          listItems(filter: { containerID: { eq: "${container.id}" } }, limit: $limit, nextToken: $nextToken) {
            items {
              id
              description
              iName
              photo
              containerID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
        }`,
      });
      formattedContainers.push({
        id: container.id,
        cName: container.cName,
        items: items.data.listItems.items.map((item: any) => {
          return {
            id: item.id,
            iName: item.iName,
            description: item.description,
            photo: item.photo,
          };
        }),
      });
    }

    //TODO we are going to need to also populate each container with it's items
    ojbectArray.push({
      pName: place.pName,
      id: place.id,
      containers: formattedContainers,
    });
  }
  return ojbectArray;
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
