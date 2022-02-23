import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default Search = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <TextInput placeholder='please type here' onChangeText={text => onChangeText(text)} value={text} style={styles.input} />
    );
};
const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    view: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    }
});
