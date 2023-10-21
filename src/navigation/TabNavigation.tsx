import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventScreen, HomeScreen, MuseumAndParkScreen, ScannerScreen, SettingsScreen } from '../screens';
import { AntDesign, Ionicons, MaterialIcons, Zocial } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
      // position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff"
    }
}

export default function Tabs() {
    const vector_components = [
      <AntDesign name="home" size={24} color="black" />,
      <MaterialIcons name="qr-code-scanner" size={24} color="black" />,
      <MaterialIcons name="museum" size={24} color="black" />,
      <Ionicons name="settings-outline" size={24} color="black" />,
      <Zocial name="eventful" size={24} color="black" />,
    ]
    const focused_vector_components = [
      <AntDesign name="home" size={24} color="#3f6ad7" />,
      <MaterialIcons name="qr-code-scanner" size={24} color="#3f6ad7" />,
      <MaterialIcons name="museum" size={24} color="#3f6ad7" />,
      <Ionicons name="settings-outline" size={24} color="#3f6ad7" />,
      <Zocial name="eventful" size={24} color="#3f6ad7" />,
    ]
  
    const TabBarIcon = (focused:boolean, id:number, label:string) => {
      const VectorComponent = focused?focused_vector_components[id-1]:vector_components[id-1]
      return <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {VectorComponent}
        <Text>{label}</Text>
      </View>
    }
    return (  
        <Tab.Navigator screenOptions={screenOptions}>      
            <Tab.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,1,'Home')
            }}
            />   
            <Tab.Screen 
            name='Museum' 
            component={MuseumAndParkScreen}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,3,'Museum')
            }}
            />     
            <Tab.Screen 
            name='Event' 
            component={EventScreen}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,5,'Event')
            }}
            />  
            <Tab.Screen
            name='Scanner'
            component={ScannerScreen}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,2,'Scanner')
            }}
            /> 
            <Tab.Screen 
            name='Settings' 
            component={SettingsScreen}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,4,'Settings')
            }}
            />
        </Tab.Navigator>
    );
}
