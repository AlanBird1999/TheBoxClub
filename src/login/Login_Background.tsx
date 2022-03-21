import React from "react";
import { StyleSheet, View } from "react-native";

export default function Login_Background() {
  return (
    <View style={styles.background_main_container}>
      <View style={styles.background_color_left} />
      <View style={styles.background_color_right} />
    </View>
  );
}

const styles = StyleSheet.create({
  background_main_container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    zIndex: -1,
    resizeMode: "stretch",
    bottom: 0,
  },
  background_color_left: {
    backgroundColor: "lightblue",
    flex: 1,
    zIndex: -1,
    resizeMode: "cover",
  },
  background_color_right: {
    backgroundColor: "white",
    flex: 2,
    zIndex: -1,
    resizeMode: "cover",
  },
});
