import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import user from "../data/user";

const screenHeight = Dimensions.get('window').height

export default Boxuser = (props) => {
    // const [name, setName] = useState('hello name')
    // setName('quan') name = 'quan'

    const name = props.name;
    const User = user;
    const alertTest = (message = '')=>{
        // alert("Image Clicked!!!" + message) 
        props.navigation.navigate('UserInfo')
    }
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.parentBox}>
                {User.map(item => (
                    <View style={styles.childrenBox} key={item.index}>
                        <TouchableOpacity onPress={() => alertTest()}>
                            <ImageBackground source={{ uri: item.avatar }} resizeMode="cover" style={styles.image}>
                                <Text style={styles.inputText}>{item.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const widthScreen = (Dimensions.get('window').width) / 3;

const styles = StyleSheet.create({
    parentBox: {
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    scrollView: {
        flex: 4,
        height: screenHeight,
        // flexDirection: "column",
        backgroundColor: '#333'
    },
    childrenBox: {
        borderColor: 'red',
        borderWidth: 1,
        height: 100,
        minWidth: widthScreen,
        // flex: 1,
        flexDirection: "column",
        textAlign: 'center',
        // margin: 5,
        borderRadius: 5,
        padding: 5
    },
    inputText: {
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'bottom'
    },
    image: {
        width: '100%',
        height: '100%',
    }
})