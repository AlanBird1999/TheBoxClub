import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function Login_Widget() {
  return (
    <View style={styles.background_main_container}>
        <TextInput
            style={styles.input_field}
            placeholder="email"
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input_field}
            placeholder="password"
            keyboardType="default"
            secureTextEntry={true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  background_main_container: {
    width: 300,
    height: 250,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_field: {
    width: 250,
    height: 60,
    backgroundColor: 'white',
    zIndex: 1000,
    padding: 10,
    borderWidth: 1,
  },
});
