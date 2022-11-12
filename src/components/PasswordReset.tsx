import {
    TextInput,
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    View,
  } from "react-native";

  import BouncyCheckbox from "react-native-bouncy-checkbox";

  import { useState } from "react";
  
  import { Amplify, Auth } from "aws-amplify";
  
  import awsconfig from "../aws-exports";
    
  Amplify.configure(awsconfig);
  
  interface resetProps {
    navigation: any;
  }
  
  export default function PasswordResetScreen(props: resetProps) {
    const [forgotPassword, setForgotPassword] = useState(false);
    const [securityCode, onChangeSecurityCode] = useState("");
    const [oldPassword, onChangeOldPassword] = useState("");
    const [newPassword, onChangeNewPassword] = useState("");

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Reset your BOXIE password</Text>
            <BouncyCheckbox
              size={40}
              fillColor={'black'}
              text="Select if you have forgotten your password"
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ 
                color: 'black',
                textDecorationLine: 'none',
               }}
              onPress={(isChecked: boolean) => {}}
              style ={styles.checkbox}
            />
            <TextInput
              style={styles.input}
              onChangeText={() => {onChangeOldPassword}}
              placeholder="Enter Old Password"
            />
            <TextInput
              style={styles.input}
              onChangeText={() => {onChangeNewPassword}}
              placeholder="Enter New Password"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => updatePassword(oldPassword, newPassword)}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            <View>
              <Button
                color={'bisque'}
                title="Back to Profile"
                onPress={() => props.navigation.navigate("Profile")}
              />    
            </View>
        </SafeAreaView>
    )
  }

  function updatePassword(oldPassword: string, newPassword: string) {
    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, oldPassword, newPassword);
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  function updateForgottenPassword(securityCode: string, newPassword: string) {
    // TODO: Implement forgot password flow
  }

  const styles = StyleSheet.create({
    logoutText: {
      color: "#FFFFFF",
    },
    container: {
      padding: 20,
      paddingBottom: 0,
      flex: 1,
      backgroundColor: "#547C7D",
      justifyContent: "center",
    },
    image: {
      height: 200,
      width: 200,
    },
    button: {
      alignItems: "center",
      backgroundColor: "black",
      padding: 10,
      margin: 10,
      width: 400,
    },
    text: {
      color: "lightblue",
      fontSize: 25,
    },
    title: {
      fontSize: 30,
      alignSelf: "center",
      color: "lightblue",
      marginBottom: 20,
    },
    input: {
      height: 50,
      borderBottomColor: "lightblue",
      borderBottomWidth: 2,
      margin: 10,
    },
    checkbox: {
      justifyContent: 'center',
    }
  });