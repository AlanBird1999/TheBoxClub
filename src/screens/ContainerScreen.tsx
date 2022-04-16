import { StyleSheet, View, FlatList, ImageURISource } from "react-native";
import Container from "../components/Container";

interface containerProps {
  route: {
    params: {
      containers: {
        name: string;
        key: number;
        items: { name: string; description: string; image?: ImageURISource }[];
      }[];
    };
  };
  navigation: any;
}

export default function ContainerScreen(props: containerProps) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={props.route.params.containers}
        renderItem={({ item }) => (
          <Container
            name={item.name}
            navigation={props.navigation}
            items={item.items}
          ></Container>
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
