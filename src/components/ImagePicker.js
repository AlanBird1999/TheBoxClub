import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

export default function ImagePicker(props) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      props.upload(result.uri);
    }
  };

  const getImage = async () => {
    return image;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button 
      color={'bisque'}
      title="Pick an image from camera roll" 
      onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
