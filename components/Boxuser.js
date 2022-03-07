import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import user from "../data/User";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const screenHeight = Dimensions.get('window').height

export default Boxuser = ({navigation}) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.parentBox}>
                {user.map(item => (
                    <View style={styles.childrenBox} key={item.index}>
                        <TouchableOpacity onPress={() => { console.log(navigation)}}>
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

const widthScreen = (Dimensions.get('window').width) / 4;

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