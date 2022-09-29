import { ScrollView, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import Amplify from "aws-amplify";
import AWSConfig from "../aws-exports";
import Container from "./Container";

Amplify.configure(AWSConfig);

interface nameProps {
  name: string;
  nav: any;
  containers: any;
}

export default function Room(props: nameProps) {
  return (
    <SafeAreaView>
      <Text style={styles.roomName}>{props.name}</Text>
      <FlatList 
        data={props.containers} 
        style={styles.contentContainer}
        horizontal={true}
        renderItem={({ item }) => (
          <Container
            name={item.name}
            room={props.name}
            navigation={props.nav}
            items={item.items}
          ></Container>
        )}
      />
    </SafeAreaView>
  );
}

function openContainers(containers: any, nav: any) {
  nav.navigate("ContainerScreen", { containers });
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    margin: 10,
  },
  contentContainer: {
    height: 200,
    width: 400,
  },
  roomName: {
    fontSize: 20,
    color: "lightblue",
  },
});
