import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const widthScreen = (Dimensions.get('window').width) / 4;

function BottomMenu({ navigation }) {
    // console.log(navigation.getState().index)
    const currentRoute = navigation.getState().routes[navigation.getState().index].name
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home', { name: 'Home' })}>
                {console.log(currentRoute)}
                <View style={[styles.menu_bottom, (currentRoute === 'Home') ? styles.menu_active : '']}>
                    <Ionicons name={'person-outline'} size={16} color={'tomato'} />
                    <Text style={styles.menu_bottom_text}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ChatList', { name: 'ChatList' })}>
                <View style={[styles.menu_bottom, (currentRoute === 'ChatList') ? styles.menu_active : '']}>
                    <Ionicons name={'chatbox-outline'} size={16} color={'tomato'} />
                    <Text style={styles.menu_bottom_text}>ChatList</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserInfo', { name: 'UserInfo' })}>
                <View style={[styles.menu_bottom,(currentRoute === 'UserInfo') ? styles.menu_active : '']}>
                    <Ionicons name={'person-outline'} size={16} color={'tomato'} />
                    <Text style={styles.menu_bottom_text}>UserInfo</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings', { name: 'Settings' })}>
                <View style={[styles.menu_bottom,(currentRoute === 'Settings') ? styles.menu_active : '']}>
                    <Ionicons name={'settings-outline'} size={16} color={'tomato'} />
                    <Text style={styles.menu_bottom_text}>Settings</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default BottomMenu;

const styles = StyleSheet.create({
    menu_bottom: {
        width: widthScreen,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: "#333"
    },
    menu_active: {
        backgroundColor: '#0DA2F4'
    },
})