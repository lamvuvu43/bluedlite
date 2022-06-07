import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default Search = (props) => {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <View style={styles.search}>
            <TextInput placeholder='please type here' onChangeText={text => onChangeText(text)} value={props.name} style={styles.input} />
        </View>
    );
};
const styles = StyleSheet.create({

    input: {
        // height: 40,
        // margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#4665',
        borderRadius: 5
    },
    search: {
        paddingTop: 5,
    }
});
