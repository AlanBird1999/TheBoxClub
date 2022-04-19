import { View, Image, ImageURISource, Text, StyleSheet } from "react-native";

interface itemViewProps {
  route: {
    params: {
      image?: ImageURISource;
      name: string;
      description: string;
    };
  };
  navigation: any;
}

export default function ItemView(props: itemViewProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          props.route.params.image || require("../../assets/default-box.png")
        }
      ></Image>
      <Text>Name: {props.route.params.name}</Text>
      <Text>Description: {props.route.params.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    paddingTop: 30,
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
