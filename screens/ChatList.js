import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import ChatHistoryData from "../data/ChatHistory";
import BottomMenu from "./BottomMenu";

const Item = ({ item, navigation }) => {
    return (
        <TouchableOpacity key={item.index} onPress={() => navigation.navigate('ChatDetail', { name: "ChatDetail" })}>
            <View style={styles.item}>
                <Image style={styles.image} source={{ uri: 'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png' }}></Image>
                <Text style={styles.textList}>{item.name.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    );
};

// const renderItem = ({item separators }) => (

//     <Item item={item} key={item.index}> {console.log(separators )}</Item>
// );


const ChatList = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 11 / 2 }}>
                <ScrollView>
                    {ChatHistoryData.map(item => (
                        <Item item={item} navigation={navigation} key={item.index} />
                    ))}
                </ScrollView>
            </View>
            <View style={{ flex: 1/2, flexDirection:'row' }}>
                <BottomMenu navigation={navigation}></BottomMenu>
            </View>
        </View>
    )
}

export default ChatList;

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 1,
        //   marginHorizontal: 16,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    textList: {
        textAlignVertical: "top",
        paddingLeft: 5,
        fontSize: 20
    },
    title: {
        fontSize: 32,
    },
});