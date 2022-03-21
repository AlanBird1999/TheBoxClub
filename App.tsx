import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Login_Background from './Login_Background';
import Login_Widget from './Login_Widget';

export default function App() {
  return (
    <KeyboardAvoidingView 
      style={styles.content_container}
      behavior='padding'
    >
      <Login_Background/>
      <Text style={styles.login_page_boxie}>B O X I E</Text>
      <View style={styles.signin_signup}>
        <Login_Widget/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_page_boxie: {
    fontSize: 50,
    position: 'absolute',
    top: '33%',
  },
  signin_signup: {
    position: 'absolute',
    top: '55%',
  }
});
