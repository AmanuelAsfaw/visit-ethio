import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventDetailScreen } from '../screens';
import { AntDesign, Ionicons, MaterialIcons, Zocial } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

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
