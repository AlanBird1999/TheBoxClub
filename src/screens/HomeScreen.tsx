import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import AWSConfig from "../aws-exports";

import Room from "../components/Room";
import * as mutations from "../graphql/mutations";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { printQRCodes, printInsuranceForm } from "../PrintService";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Item from "../components/Item";
Amplify.configure(AWSConfig);

interface homeProps {
  navigation: any;
  route: any;
}

export default function HomeScreen(props: homeProps) {
  const [residenceData, setResidenceData] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [resultList, setResultList] = useState(null);
  // TODO possible logic for reload only on command?
  // if props.route.params.reloadItems setResidenceData(null);
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

          dataResidence.data.listResidences.items[0] =
            newResidence.data.createResidence;
          //TODO: right around here if we want the ability to have multiple users to a single residence
          //this is where we can prompt them to give a residence head
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
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        Alert.alert("Error getting user details", error.message, [
          {
            text: "OK",
            style: "cancel",
          },
        ]);
        setLoading(false);
      });

  if (props.route.params?.containerId && !loading) {
    navigateItem(
      props.route.params.containerId,
      residenceData,
      props.navigation
    );
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BOXIE</Text>
      {loading ? (
        <View>
          <Image
            style={styles.loadingGif}
            source={require("../../assets/box-load-gif.gif")}
          />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Search for items"
          onChangeText={(text) => {
            setSearchText(text);
            onChangeSearchText(text, setResultList, residenceData);
          }}
          value={searchText}
        />
      )}
      {searchText ? (
        <FlatList
          numColumns={1}
          data={resultList}
          renderItem={({ item }) => (
            <Item item={item} navigation={props.navigation}></Item>
          )}
        />
      ) : (
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
      )}

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => printAllInsurance(residenceData, loading)} // print all insurance info
        >
          <MaterialCommunityIcons name="printer" color={"#FFFFFF"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => printAllQR(residenceData, loading)} // print all qr codes
        >
          <MaterialCommunityIcons name="qrcode" color={"#FFFFFF"} size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => addItem(props.navigation, residenceData, loading)}
        >
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function onChangeSearchText(
  text: string,
  setResultList: any,
  residenceData: any
) {
  let items = residenceData.Places.map((place: any) => {
    return place.containers.map((container: any) => {
      return container.items;
    });
  }).flat(2);
  items = items.filter((item: any) => {
    const iName = item.iName.toLowerCase();
    return iName.includes(text.toLocaleLowerCase());
  });
  setResultList(items);
}

function printAllQR(residenceData: any, loading: boolean) {
  if (loading) {
    Alert.alert("Still loading data", "Please wait while your data is loaded", [
      {
        text: "OK",
        style: "cancel",
      },
    ]);
    return;
  }

  printQRCodes(
    residenceData.Places.map((place: any) => {
      return place.containers.map((container: any) => {
        return {
          pName: place.pName,
          ...container,
        };
      });
    }).flat(1)
  );
}

function printAllInsurance(residenceData: any, loading: boolean) {
  if (loading) {
    Alert.alert("Still loading data", "Please wait while your data is loaded", [
      {
        text: "OK",
        style: "cancel",
      },
    ]);
    return;
  }

  printInsuranceForm(residenceData);
}

async function navigateItem(
  containerId: string,
  residenceData: any,
  navigation: any
) {
  for (const place of residenceData?.Places) {
    for (const container of place.containers) {
      if (container.id === containerId) {
        navigation.navigate("ItemScreen", {
          items: container.items,
          room: place.pName,
          container: container.cName,
        });
        return;
      }
    }
  }
  Alert.alert(
    "Error scanning qr code",
    "An item with the provided id does not exist.",
    [
      {
        text: "OK",
        style: "cancel",
      },
    ]
  );
  return;
}

function addItem(navigation: any, data: any, loading: boolean) {
  if (loading) {
    Alert.alert("Still loading data", "Please wait while your data is loaded", [
      {
        text: "OK",
        style: "cancel",
      },
    ]);
    return;
  }
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
  loadingGif: {
    maxWidth: "100%",
    maxHeight: "50%",
    opacity: 0.5,
    resizeMode: "contain",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 30,
  },
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#547C7D",
  },
  title: {
    fontSize: 35,
    color: "lightblue",
    padding: 25,
  },
  input: {
    height: 50,
    width: "90%",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: "white",
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
    margin: 5,
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
