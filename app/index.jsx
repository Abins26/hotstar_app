import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homescreen';
import SearchScreen from './screens/search';
import MySpace from './screens/myspace';
import New_HotScreen from './screens/new_hot';
import DownloadsScreen from './screens/downloads';
// import linking from '../Navigation/linking';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            }else if(route.name === 'New & Hot'){
                iconName = 'flame-outline';
            }else if(route.name === 'Doenloads'){
                iconName = 'download-outline';
            }else if(route.name === 'MySpace'){
                iconName = 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        }}
        >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
        <Tab.Screen name="New & Hot" component={New_HotScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Downloads" component={DownloadsScreen} options={{headerShown:false}}/>
        <Tab.Screen name="MySpace" component={MySpace} options={{headerShown:false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const HomeScreen = () => {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        //  <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} /> 
//       </Stack.Navigator>
//     );
//   };