import {
  View,
  SafeAreaView,
  Image,
  ImageURISource,
  Text,
  StyleSheet,
  Button,
} from "react-native";

import {Amplify, Storage} from "aws-amplify";
import { useState } from "react";
import { getAmplifyUserAgent } from "@aws-amplify/core";

import awsconfig from '../aws-exports';

// THIS IS ANOTHER OPTION FOR GETTING IT TO WORK!!

import { withAuthenticator, S3Image } from 'aws-amplify-react-native';

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

  let imageKey = props.route.params.photo;

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="See photo!" 
        onPress={() => {
          getImage(setImage, imageKey)
        }}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Image
        style={styles.image}
        source={
          // this image piece is not going in quite right
          image || require("../../assets/default-box.png")
        }
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

const getImage = async (setImage: any, imageKey: string | undefined) => {
  let result;

  if(!imageKey) {
    result = "../../assets/default-box.png";
  } else {
    try{
      result = await Storage.get("https://boxie-image-storage132638-dev.s3.amazonaws.com/public/Small+cactus");
    } catch (err) {
      result = "../../assets/default-box.png";
    }
  }

  console.log("result from s3", result);
  
  setImage(result);
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  itemText: {},
  text: {},
});
