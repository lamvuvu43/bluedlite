import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Boxuser from './components/Boxuser';

import Search from './components/Search';
export default Main = () => {
    return (
        <View style={styles.search}>
            <Search></Search>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        paddingTop: 30
    }
})