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
    
  Amplify.configure(awsconfig);
  
  interface resetProps {
    navigation: any;
  }
  
  export default function Password_Reset_Screen(props: resetProps) {
    return(
        <SafeAreaView>
            <Text>Reset your password here</Text>
        </SafeAreaView>
    )
  }