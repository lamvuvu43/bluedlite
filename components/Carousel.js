import React from "react";
import { Text, TextInput, View, StyleSheet,Image } from "react-native";

export default Carousel = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <View style={styles.carousel}>
            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.iamges}></Image>
        </View>
    );
};
const styles = StyleSheet.create({
    carousel: {
        // paddingTop:50,
        // flex: 1/2,
        borderWidth:1,
    },
    iamges: {
        height: '100%',
        width: '100%',
        padding: 5,
    }
});