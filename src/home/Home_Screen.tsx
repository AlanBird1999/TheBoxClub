import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
  StatusBar
} from "react-native";

interface homeProps {
  navigation: any;
}

const data = [
    {
        name: "Basement",
        key: 1
    },
    {
        name: "Storage Room",
        key: 2
    },
    {
        name: "Attic",
        key: 3
    },
    {
        name: "Garage",
        key: 4
    },
    {
        name: "Spare Room",
        key: 5
    },
    {
        name: "The Crypt",
        key: 6
    },
    {
        name: "Grandma's Attic",
        key: 7
    },
    {
        name: "Fruit Cellar",
        key: 8
    },
    {
        name: "Shed",
        key: 9
    },
];

export default function Home_Screen(props: homeProps) {
  return (
    <View style={styles.container}>
      <FlatList 
      data={data}
      renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20
      //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: "skyblue",
      fontSize: 24,
    },
    title: {
      fontSize: 32,
    },
  });
