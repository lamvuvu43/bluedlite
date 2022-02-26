import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import Boxuser from './components/Boxuser';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel></Carousel>
      <Search></Search>
      <Boxuser name='Vu'></Boxuser>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
});
