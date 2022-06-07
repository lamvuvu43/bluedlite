import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import Search from './components/Search';
import Boxuser from './components/Boxuser';
import Carousel from './components/Carousel';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserInfo from './screens/UserInfo';
import ChatList from './screens/ChatList';
import ChatDetail from './screens/ChatDetail';
import BottomMenu from './screens/BottomMenu';

// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const searchName = 'sdg';
const widthScreen = (Dimensions.get('window').width) / 4;
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1 }}>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('ChatDetail', { name: 'Detail' })
          }
        />
          <View style={{ flex: 1 }}>
        <Carousel></Carousel>
      </View>
      
      </View>
      <View style={{ flex: 1/2,backgroundColor:'gray' }}>
        <Search name={searchName}></Search>
      </View>
     
      <View style={{ flex: 4 }}>
        <Boxuser navigation={navigation}></Boxuser>
      </View>
      <View style={{ flex:1/2 }}>
        <BottomMenu navigation={navigation}></BottomMenu>
      </View>
    </View>
  );
}


// function BottomMenu({ navigation }) {
//   // get current route
//   console.log(navigation);
//   const currentRoute = navigation.getState().routes[0].name
//   return (
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
//       <TouchableOpacity onPress={() => navigation.navigate('Home', { name: 'Home' })}>
//         {console.log(currentRoute)}
//         <View style={[styles.menu_bottom, (currentRoute === 'Home') ? styles.menu_active:'']}>
//           <Ionicons name={'person-outline'} size={16} color={'tomato'} />
//           <Text style={styles.menu_bottom_text}>Home</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ChatList', { name: 'ChatList' })}>
//         <View style={styles.menu_bottom}>
//           <Ionicons name={'chatbox-outline'} size={16} color={'tomato'} />
//           <Text style={styles.menu_bottom_text}>ChatList</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('UserInfo', { name: 'UserInfo' })}>
//         <View style={styles.menu_bottom}>
//           <Ionicons name={'person-outline'} size={16} color={'tomato'} />
//           <Text style={styles.menu_bottom_text}>UserInfo</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Settings', { name: 'Settings' })}>
//         <View style={styles.menu_bottom}>
//           <Ionicons name={'settings-outline'} size={16} color={'tomato'} />
//           <Text style={styles.menu_bottom_text}>Settings</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }


function Settings({ navigation }) {
  return (
    <View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Settings </Text>
      </View>
      <BottomMenu navigation={navigation} style={{ flexDirection: 'row' }}></BottomMenu>
    </View>
  )
}

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          <ion-icon name="chatbox-outline"></ion-icon>
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Settings" component={Settings} navigation />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <MyStack></MyStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#fff',
    flex: 1
  },
  menu_bottom_text: {
    borderRadius: 0,
    color: '#FFFFFF',
    fontSize: 15,
  }
});
