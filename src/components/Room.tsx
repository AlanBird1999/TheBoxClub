import {
    View,
    Text,
    StyleSheet
  } from "react-native";
  import Amplify from "aws-amplify";
  import AWSConfig from "../aws-exports";
  
  Amplify.configure(AWSConfig);

  export default function Room() {
      return(
          <View style={styles.container}>
              <Text style={styles.roomName}>
                  Room Name
              </Text>
          </View>
      );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center'
      },
      roomName: {
          fontSize: 20,
          color: 'lightblue'
      }
  })