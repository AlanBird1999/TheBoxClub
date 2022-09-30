<<<<<<< HEAD
/*************************************************************
    This file will be upated to be a tab-based navigation for
    SignIn and SignUp screens. At this stage, we are just
    getting things to work
 *************************************************************/

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import AWSConfig from "../aws-exports";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

Amplify.configure(AWSConfig);

interface loginProps {
  navigation: any;
}

var state = {
  username: "",
  password: "",
  confirmation: "",
};

function changeText(key: string, value: string) {
  if (key == "username") {
    state.username = value;
  } else if (key == "password") {
    state.password = value;
  } else if (key == "confirmation") {
    state.confirmation = value;
  }
}

function login(nav: any) {
  Auth.signIn({
    username: state.username,
    password: state.password,
  })
    .then(() => {
      nav.reset({
        index: 0,
        routes: [{ name: "TabNav" }],
      });
      Alert.alert("Login Success!", "You successfully logged in to Boxie!", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    })
    .catch((error) => {
      Alert.alert("Sign In Error", error.message, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

function signUp() {
  var registerUser = new Promise((resolve, reject) => {
    Auth.signUp({
      username: state.username,
      password: state.password,
      attributes: {
        email: state.username,
      },
    });
  });

  registerUser
    .then(() => {
      Alert.alert(
        "Now let's confirm",
        "Check your email for a verification code",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
      Auth.confirmSignUp(state.username, state.confirmation);
    })
    .catch((error) => {
      Alert.alert("Sign Up Error", error, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

function confirmSignUp() {
  var confirm = new Promise((resolve, reject) => {
    Auth.confirmSignUp(state.username, state.confirmation);
  });

  confirm
    .then(() => {
      Alert.alert(
        "Now let's confirm",
        "Check your email for a verification code",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    })
    .catch((error) => {
      Alert.alert("Error in confirmation code", error, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

export default function LoginScreen(props: loginProps) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <SafeAreaView>
            <Text
              style={styles.title}
              onPress={() => props.navigation.navigate("TabNav")}
            >
              B O X I E
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              keyboardType="email-address"
              onChangeText={(value) => changeText("username", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(value) => changeText("password", value)}
            />
            <TouchableOpacity
              onPress={() => login(props.navigation)}
              style={styles.button}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547C7D',
    justifyContent: 'center',
  },
  text: {
    color: 'lightblue',
    fontSize: 25,
  },
  scrollv: {
    flexGrow: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: 400,
  },
  title: {
    fontSize: 45,
    alignSelf: "center",
    color: 'lightblue',
  },
});
=======
/*************************************************************
    This file will be upated to be a tab-based navigation for
    SignIn and SignUp screens. At this stage, we are just
    getting things to work
 *************************************************************/

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import Amplify, { Auth } from "aws-amplify";
import AWSConfig from "../aws-exports";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

Amplify.configure(AWSConfig);

interface loginProps {
  navigation: any;
}

var state = {
  username: "",
  password: "",
  confirmation: "",
};

function changeText(key: string, value: string) {
  if (key == "username") {
    state.username = value;
  } else if (key == "password") {
    state.password = value;
  } else if (key == "confirmation") {
    state.confirmation = value;
  }
}

function login(nav: any) {
  Auth.signIn({
    username: state.username,
    password: state.password,
  })
    .then(() => {
      nav.reset({
        index: 0,
        routes: [{ name: "TabNav" }],
      });
      Alert.alert("Login Success!", "You successfully logged in to Boxie!", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    })
    .catch((error) => {
      Alert.alert("Sign In Error", error.message, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

function signUp() {
  var registerUser = new Promise((resolve, reject) => {
    Auth.signUp({
      username: state.username,
      password: state.password,
      attributes: {
        email: state.username,
      },
    });
  });

  registerUser
    .then(() => {
      Alert.alert(
        "Now let's confirm",
        "Check your email for a verification code",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
      Auth.confirmSignUp(state.username, state.confirmation);
    })
    .catch((error) => {
      Alert.alert("Sign Up Error", error, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

function confirmSignUp() {
  var confirm = new Promise((resolve, reject) => {
    Auth.confirmSignUp(state.username, state.confirmation);
  });

  confirm
    .then(() => {
      Alert.alert(
        "Now let's confirm",
        "Check your email for a verification code",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    })
    .catch((error) => {
      Alert.alert("Error in confirmation code", error, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    });
}

export default function LoginScreen(props: loginProps) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollv}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <SafeAreaView>
            <Text
              style={styles.title}
              onPress={() => props.navigation.navigate("TabNav")}
            >
              B O X I E
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              keyboardType="email-address"
              onChangeText={(value) => changeText("username", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(value) => changeText("password", value)}
            />
            <TouchableOpacity
              onPress={() => login(props.navigation)}
              style={styles.button}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547C7D',
    justifyContent: 'center',
  },
  text: {
    color: 'lightblue',
    fontSize: 25,
  },
  scrollv: {
    flexGrow: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    margin: 10,
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: 400,
  },
  title: {
    fontSize: 45,
    alignSelf: "center",
    color: 'lightblue',
  },
});
>>>>>>> 7b2323de3888acef9442f4e31e33b4b788a2df68
