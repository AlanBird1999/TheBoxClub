import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageURISource,
} from "react-native";
import Container from "../components/Container";

interface containerProps {
  route: {
    params: {
      containers: {
        cName: string;
        key: number;
        items: { name: string; description: string; image?: ImageURISource }[];
      }[];
    };
  };
  navigation: any;
}

export default function ContainerScreen(props: containerProps) {
  console.log("props", props.route.params.containers);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={props.route.params.containers}
        renderItem={({ item }) => (
          <Container
            name={item.cName}
            navigation={props.navigation}
            items={item.items}
          ></Container>
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
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
  },
});
