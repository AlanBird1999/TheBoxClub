import { StyleSheet, SafeAreaView, FlatList, ImageURISource } from "react-native";
import Item from "../components/Item";

interface itemProps {
  route: {
    params: {
      items: { name: string; description: string; image?: ImageURISource }[];
    };
  };
  navigation: any;
}

export default function ItemScreen(props: itemProps) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={props.route.params.items}
        renderItem={({ item }) => (
          <Item navigation={props.navigation} item={item}></Item>
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
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
});
