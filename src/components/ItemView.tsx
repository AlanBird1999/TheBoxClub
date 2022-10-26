import {
  View,
  SafeAreaView,
  Image,
  ImageURISource,
  Text,
  StyleSheet,
} from "react-native";

import {Amplify, Storage} from "aws-amplify";
import { useState } from "react";
import { getAmplifyUserAgent } from "@aws-amplify/core";

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

  let imageUri = props.route.params.photo;

  console.log("image uri:", imageUri)

  if(imageUri){
    try {
      getImage(setImage, imageUri);
    } catch(err) {
      console.log("error getting image from s3!\n", err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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

async function getImage(setImage: any, imageUri: string) {
  const result = await Storage.get(imageUri, {
    download: true,
  });

  console.log("result from s3:", result)

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
