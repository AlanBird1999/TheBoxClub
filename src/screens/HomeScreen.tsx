import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from '../aws-exports';

Amplify.configure(AWSConfig);

export default function HomeScreen() {
    return (
        <View style = {styles.container}>
            <Text>Home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 50,
        borderBottomColor: 'lightblue',
        borderBottomWidth: 2,
        margin: 10
    }
});