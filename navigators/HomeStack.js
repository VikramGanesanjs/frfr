import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Welcome from '../screens/Welcome';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import TrendingScreen from '../screens/TrendingScreen';
import NewsScreen from '../screens/NewsScreen';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../components/styles';
import { createStackNavigator } from '@react-navigation/stack';
import Lists from '../screens/Lists';
const {brand, darkLight, white, primary} = Colors;


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator headerMode='none' initialRouteName='Home' screenOptions={{
      headerShown: false,
      tabBarStyle:{
        position: 'absolute',
        flex: 1,
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
        ...styles.shadow,
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarActiveTintColor: brand,
      tabBarInactiveTintColor: darkLight,
      tabBarLabelStyle:{
        fontSize: 20,
      },
    }}>
      <Tab.Screen name='Home' component={Welcome} options={{
        tabBarIcon: ({ color }) => 
          <Ionicons name='home' color={color} /> ,
          
        tabBarLabel: ({ color }) => <TabBarLabel color={color} title='HOME' />,
      }}/>
      <Tab.Screen name= 'LIST' component={ListsStack} options={{
        tabBarIcon: ({color}) => <Ionicons name='list' color={color}/>,
        tabBarLabel: ({ color }) => <TabBarLabel color={color} title='LIST' />,
        }}/>
      <Tab.Screen name='ADD' component={SearchScreen} options={{
        tabBarButton: ({ props }) => <CustomTabBarButton {...props} /> 
      }}/>
      <Tab.Screen name='Calendar' component={TrendingScreen} options={{
        tabBarIcon: ({color}) => <Ionicons name='calendar' color={color} />,
        tabBarLabel: ({ color }) => <TabBarLabel color={color} title='CALENDAR' />,
        }}/>
      <Tab.Screen name='Account' component={AccountScreen} options={{
        tabBarIcon: ({color}) => <Ionicons name='person' color={color}/>,
        tabBarLabel: ({ color }) => <TabBarLabel color={color} title='ACCOUNT' />,
      }}/>
          
    </Tab.Navigator>
  );
}

function ListsStack(){
  return(
    <Stack.Navigator screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
    }}>
      <Stack.Screen name="Lists" component={Lists}/>
      <Stack.Screen name="ListView" component={NewsScreen} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#FFFFFF',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});


const TabBarLabel = ({color, title}) => {
  return(
  <Text style={{
    fontSize: 15,
    color: color,
  }}>
    {title}
  </Text>
  );
}

const CustomTabBarButton = ({ onPress }) => {
  return(
    <TouchableOpacity style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
      
    }} onPress={onPress}>
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: brand,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Ionicons name='add' color='#ffffff'/>
      </View>
    </TouchableOpacity>
  );
}