import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Login_Background() {
  return (
    <View style={styles.background_main_container}>
      <View style={styles.background_color_blue}/>
      <View style={styles.background_color_yellow}/>
    </View>
  );
}

const styles = StyleSheet.create({
  background_main_container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    zIndex: -1,
  },
  background_color_blue: {
    backgroundColor: '#486BDB',
    flex: 1,
    zIndex: -1,
  },
  background_color_yellow: {
    backgroundColor: '#49D19E',
    flex: 2,
    zIndex: -1,
  },
});
