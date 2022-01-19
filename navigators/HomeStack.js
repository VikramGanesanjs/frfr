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
import AddReminder from './../screens/AddReminder';
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
      
        elevation: 0,
        backgroundColor: primary,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: brand,
      tabBarInactiveTintColor: darkLight,
    }}>
      <Tab.Screen name='Home' component={Welcome} options={{
      tabBarButton: CustomTabBarButton2,
      tabBarIcon: ({ color }) => 
          <Ionicons name='home' color={color} size={30}/> ,
          
        
      }}/>
      <Tab.Screen name= 'LIST' component={ListsStack} options={{
       tabBarButton: CustomTabBarButton2,
       tabBarIcon: ({ color }) => 
           <Ionicons name='list' color={color} size={30}/> ,
        }}/>
      <Tab.Screen name='ADD' component={AddStack} options={({navigation}) => {
        return{
          tabBarButton: () => <CustomTabBarButton navigation={navigation}/> 
        }
      }
        
    }/>
      <Tab.Screen name='Calendar' component={TrendingScreen} options={{
       tabBarButton: CustomTabBarButton2,
       tabBarIcon: ({ color }) => 
           <Ionicons name='calendar' color={color} size={30}/> ,
        }}/>
      <Tab.Screen name='Account' component={AccountScreen} options={{
       tabBarButton: CustomTabBarButton2,
       tabBarIcon: ({ color }) => 
           <Ionicons name='person' color={color} size={30}/> ,
      }}/>
          
    </Tab.Navigator>
  );
}

function ListsStack(){
  return(
    <Stack.Navigator screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        animationEnabled: false,
    }}>
      <Stack.Screen name="Lists" component={Lists}/>
      <Stack.Screen name="ListView" component={NewsScreen} />
    </Stack.Navigator>
  );
}

function AddStack(){

  return(
  <Stack.Navigator screenOptions={{
    headerShown: false,
    headerShadowVisible: false,
    animationEnabled: false,
  }}>
  <Stack.Screen name="AddReminder" component={AddReminder}/>
  <Stack.Screen name="AddList" component={SearchScreen} />
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

const CustomTabBarButton = ({ navigation }) => {
  return(
    <TouchableOpacity style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      
    }} onPress={() => navigation.navigate("ADD")}>
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        borderColor: white,
        borderWidth: 2,
        backgroundColor: brand,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Ionicons name='add' color='#ffffff' size={25}/>
      </View>
    </TouchableOpacity>
  );
}

const CustomTabBarButton2 = (props) => {
  return(
    <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [...props.style, { borderTopColor: brand, borderTopWidth: 10,}]
        : props.style
    }/>
      
  );

}