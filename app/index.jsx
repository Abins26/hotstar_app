import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homescreen';
import SearchScreen from './screens/search';
import MySpaceScreen from './screens/myspace';
import New_HotScreen from './screens/new_hot';
import DownloadsScreen from './screens/downloads';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MovieDetailScreen from "./components/moviedetail";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import linking from '../Navigation/linking';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Tabs() {
  return (
    <NavigationContainer independent={true} >
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'New & Hot') {
              iconName = focused ? 'flame' : 'flame-outline';
            } else if (route.name === 'Downloads') {
              iconName = focused ? 'download' : 'download-outline';
            } else if (route.name === 'My Space') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'black' },
        })}
      >
        <Tab.Screen name="Home" component={Home_Screen} options={{headerShown:false}}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
        <Tab.Screen name="New & Hot" component={New_HotScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Downloads" component={DownloadsScreen} options={{headerShown:false}}/>
        <Tab.Screen name="My Space" component={MySpaceScreen} options={{headerShown:false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Home_Screen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home2" component={HomeScreen} options={{ headerShown: false }} />
         <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    );
  };