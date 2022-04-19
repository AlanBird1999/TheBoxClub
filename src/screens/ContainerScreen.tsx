import { StyleSheet, SafeAreaView, FlatList, ImageURISource } from "react-native";
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
    <SafeAreaView style={styles.container}>
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
