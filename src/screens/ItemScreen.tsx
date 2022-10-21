import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageURISource,
} from "react-native";
import Item from "../components/Item";

interface itemProps {
  route: {
    params: {
      items: any[];
      room: string;
      container: string;
    };
  };
  navigation: any;
}

export default function ItemScreen(props: itemProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {props.route.params.room} // {props.route.params.container}
      </Text>
      <FlatList
        numColumns={2}
        data={props.route.params.items}
        renderItem={({ item }) => (
          <Item
            room={props.room}
            container={props.container}
            navigation={props.navigation}
            item={item}
          ></Item>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#547C7D",
  },
  text: {
    fontSize: 30,
    color: "lightblue",
    padding: 25,
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
});
