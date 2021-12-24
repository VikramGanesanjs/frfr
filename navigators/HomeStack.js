import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login'
import Signup from './../screens/Signup';
import AccountScreen from './../screens/AccountScreen';
import SearchScreen from './../screens/SearchScreen';
import TrendingScreen from './../screens/TrendingScreen';
import NewsScreen from './../screens/NewsScreen';


const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator headerShown='false' headerMode='none' initialRouteName='Home'>
      <Tab.Screen name='Home' component={Welcome} />
      <Tab.Screen name= 'List' component={NewsScreen} />
      <Tab.Screen name='Add' component={SearchScreen} />
      <Tab.Screen name='Calendar' component={TrendingScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#7F5DF0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
})