import { View, SafeAreaView, Image, ImageURISource, Text, StyleSheet } from "react-native";

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
  console.log(props.route.params);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={
          props.route.params.image || require("../../assets/default-box.png")
        }
      ></Image>
      <View style={styles.itemText}>
        <Text style={styles.text}>Name: {props.route.params.name}</Text>
        <Text style={styles.text}>Description: {props.route.params.description}</Text>
      </View>
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
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  itemText: {
    
  },
  text: {
    
  },
});
