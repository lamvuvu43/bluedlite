import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import ChatHistoryData from "../data/ChatHistory";
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from "./Chat";

const Item = (props) => (
    <TouchableOpacity key={props.item.index} onPress={() =>  props.navigation.navigate('Chat')}>
        <View style={styles.item}>
            <Image style={styles.image} source={{ uri: 'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png' }}></Image>
            <Text style={styles.textList}>{props.item.name.toUpperCase()}</Text>
            <View>
            {/* {console.log(props.navigation.navigate('Chat'))} */}
           {/* {item.history.map(element => {
               <Text>{element.content}</Text>
           })} */}
        </View>
        </View>
    </TouchableOpacity>
);

// const renderItem = ({item separators }) => (
   
//     <Item item={item} key={item.index}> {console.log(separators )}</Item>
// );


const ChatHistory = ({navigation}) => {
    return (
        <ScrollView>
            {/* <FlatList
                data={ChatHistoryData}
                renderItem={item => renderItem(item, item.index, navigation)}
                keyExtractor={item => item.index}>
            </FlatList> */}
            {/* {console.log(props.navigation)} */}
            {ChatHistoryData.map(item => (
                <Item  item={item} navigation={navigation} key={item.index}/>
            ))}
        </ScrollView>
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