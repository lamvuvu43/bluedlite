import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import Boxuser from './components/Boxuser';
import Carousel from './components/Carousel';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserInfo from './screens/UserInfo';
import ChatList from './screens/ChatHistory';

const searchName  = 'sdg';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Carousel></Carousel>
      <Search name={searchName}></Search>
      <Boxuser></Boxuser>
    </View>
  );
}

// function Chat() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Chat list</Text>
//     </View>
//   )
// }

// function UserInfo({UserInfo}) {
//   return (
//     <UserInfo></UserInfo>
//   )
// }

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Settings </Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }
            if (route.name === 'Settings') {
              iconName = focused ? 'settings-outline' : 'ios-list';
            }
            if (route.name === 'Chat') {
              iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
            }

            if (route.name === 'UserInfo') {
              iconName = focused ? 'person-outline' : 'person-outline';
            }
            <ion-icon name="chatbox-outline"></ion-icon>
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatList} navigation={NavigationContainer.navigation}/>
        <Tab.Screen name="UserInfo" component={UserInfo} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
});
