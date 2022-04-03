import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import UserInfoDetail from "../data/UserInfo";
import BottomMenu from "./BottomMenu";
const screenHeight = Dimensions.get('window').height

const alertTest = (message = '') => {
    alert(message);
}


export default UserInfo = ({navigation}) => {
    return (
        <View style={{ flex:1 }}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.parentBox}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap" }}>
                        <Image style={styles.image} source={{ uri: UserInfoDetail.image }}></Image>
                        <Text style={{ textAlignVertical: "center", paddingLeft: 20, fontSize: 23 }}>{UserInfoDetail.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', fontSize: 20, paddingTop: 20 }}>
                        <Text style={{ fontSize: 20 }}>Ngày sinh: </Text>
                        <Text style={{ fontSize: 20 }}>{UserInfoDetail.date_of_birth}</Text>
                    </View>
                </View>
            </ScrollView>
            <BottomMenu navigation={navigation}></BottomMenu>
        </View>
    )
}

const widthScreen = (Dimensions.get('window').width) / 4;

const styles = StyleSheet.create({
    parentBox: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: "column",
    },
    scrollView: {
        flex: 1,
        height: screenHeight,
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
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})