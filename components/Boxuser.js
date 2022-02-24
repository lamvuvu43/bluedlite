import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import user from "../data/user";

export default Boxuser = (props) => {
    const name = props.name;
    const User = user;
    return (
        <View style={styles.parentBox}>
            {User.map(item => (
                <View style={styles.childrenBox}>
                    <Image source={item.avatar} style={styles.image}></Image>
                    <Text style={styles.inputText}>{item.avatar}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    parentBox: {
        backgroundColor: '#3333',
        // width: 200,
        // height: 200,
        flex: 1,
        flexDirection: "row",
    },
    childrenBox: {
        height: 100,
        width: 'auto',
        backgroundColor: '#4464',
        flex: 4,
        flexDirection: "row",
        textAlign: 'center',
        borderColor: 'blue',
        margin: 5,
        borderRadius: 5
    },
    inputText: {
        textAlign: 'center',
        color: '#fff'
    },
    image: {
        width: 100,
        height: 100
    }
})