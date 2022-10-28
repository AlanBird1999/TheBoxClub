import {
  View,
  SafeAreaView,
  Image,
  ImageURISource,
  Text,
  StyleSheet,
  Button,
} from "react-native";

import { Amplify, Storage } from "aws-amplify";
import { useState } from "react";
import { getAmplifyUserAgent } from "@aws-amplify/core";

import awsconfig from "../aws-exports";

// THIS IS ANOTHER OPTION FOR GETTING IT TO WORK!!

import { withAuthenticator, S3Image } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

interface itemViewProps {
  route: {
    params: {
      photo?: string;
      iName: string;
      description: string;
    };
  };
  navigation: any;
}

export default function ItemView(props: itemViewProps) {
  const [image, setImage] = useState(null);

  if (props.route.params.photo && !image) {
    getItem(props.route.params.photo, setImage);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/default-box.png") && { uri: image }}
      ></Image>
      <View style={styles.itemText}>
        <Text style={styles.text}>Name: {props.route.params.iName}</Text>
        <Text style={styles.text}>
          Description: {props.route.params.description}
        </Text>
      </View>
    </SafeAreaView>
  );
}

async function getItem(photo: any, setImage: any) {
  const photoUri = await Storage.get(photo);
  setImage(photoUri);
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  itemText: {},
  text: {},
});
