import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const widthScreen = (Dimensions.get('window').width) / 4;

function BottomMenu({ navigation }) {
    // console.log(navigation.getState().index)
    const currentRoute = navigation.getState().routes[navigation.getState().index].name
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home', { name: 'Home' })} style={[styles.menu_bottom, (currentRoute === 'Home') ? styles.menu_active : '']}>
                {console.log(currentRoute)}
                <View style={styles.menu_icon_text}>
                    <Ionicons name={'person-outline'} size={16} color={'tomato'} />
                    <Text style={styles.menu_bottom_text}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ChatList', { name: 'ChatList' })} style={[styles.menu_bottom, (currentRoute === 'ChatList') ? styles.menu_active : '']}>
                <View style={styles.menu_icon_text}>
                    <Ionicons name={'chatbox-outline'} size={16} color={'tomato'} />
                    <Text style={styles.menu_bottom_text}>ChatList</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserInfo', { name: 'UserInfo' })} style={[styles.menu_bottom, (currentRoute === 'UserInfo') ? styles.menu_active : '']}>
                <View style={styles.menu_icon_text}>
                    <Ionicons name={'person-outline'} size={16} color={'tomato'} />
                    <Text style={styles.menu_bottom_text}>UserInfo</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings', { name: 'Settings' })} style={[styles.menu_bottom, (currentRoute === 'Settings') ? styles.menu_active : '']}>
                <View style={styles.menu_icon_text}>
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
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3 / 2,
    },
    menu_icon_text: {
        alignItems: 'center'
    },
    menu_active: {
        backgroundColor: '#0DA2F4'
    },
})