import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import Container from "../components/Container";

interface containerProps {
  containers: { name: string; key: number }[];
  navigation: any;
}

export default function ContainerScreen(props: any) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={props.route.params.containers}
        renderItem={({ item }) => (
          <Container name={item.name} navigation={props.navigation}></Container>
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
