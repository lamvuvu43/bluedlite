import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import ChatHistoryData from "../data/ChatHistory";
import { NavigationContainer } from '@react-navigation/native';
import Chat from './Chat'

const Item = ({item}) => (
    <TouchableOpacity onPress={()=>{('Chat')}}>
        <View style={styles.item}>
            <Image style={styles.image} source={{ uri: 'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png' }}></Image>
            <Text style={styles.textList}>{item.name.toUpperCase()}</Text>
            {/* <View>
            {console.log(item.history)}
           {item.history.forEach(element => {
               <Text>{element.content}</Text>
           })}
        </View> */}
        </View>
    </TouchableOpacity>
);

const renderItem = ({item }) => (
    <Item item={item} key={item.index}/>
);


const ChatHistory = ({navigation}) => {
    return (
        <SafeAreaView>
            <FlatList
                data={ChatHistoryData}
                renderItem={renderItem}
                keyExtractor={item => item.index}>
    
            </FlatList>
        </SafeAreaView>
    )
}

export default ChatHistory;

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