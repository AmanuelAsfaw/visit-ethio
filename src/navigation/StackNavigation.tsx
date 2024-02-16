import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventDetailScreen, EventScreen, HomeScreen, MuseumAndParkScreen } from '../screens';
import { AntDesign, Ionicons, MaterialIcons, Zocial } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ParkDetailScreen from '../screens/ParkDetail';
import MuseumDetailScreen from '../screens/MuseumDetail';

const Stack = createNativeStackNavigator();

export default function StackNavigComp() {
    return ( 
      <Stack.Navigator screenOptions={{headerShown: false}}
        initialRouteName='Tabs'>
        <Stack.Screen name='EventDetail' component={EventDetailScreen} />
        <Stack.Screen name='Tabs' component={TabNavigation} />
      </Stack.Navigator>
    );
}

export const HomeScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='EventDetail' component={EventDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='ParkDetail' component={ParkDetailScreen} options={{headerShown:true, title: 'Park'}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
  </Stack.Navigator>
}

export const MuseumAndParkScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Museum' component={MuseumAndParkScreen}/>
    <Stack.Screen name='EventDetail' component={EventDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='ParkDetail' component={ParkDetailScreen} options={{headerShown:true, title: 'Park'}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
  </Stack.Navigator>
}

export const EventScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Event' component={EventScreen}/>
    <Stack.Screen name='EventDetail' component={EventDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
  </Stack.Navigator>
}
