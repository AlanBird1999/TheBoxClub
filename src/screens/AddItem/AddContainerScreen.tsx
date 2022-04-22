import { View, StyleSheet, TextInput } from "react-native";

interface addContainerProps {
  navigation: any;
}

export default function AddContainerScreen(props: addContainerProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Item name" />
      <TextInput style={styles.input} placeholder="Item description" />
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
