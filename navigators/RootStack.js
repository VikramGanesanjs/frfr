// import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import AccountScreen from '../screens/AccountScreen';
import NewsScreen from '../screens/NewsScreen';
import SearchScreen from '../screens/SearchScreen';
import TrendingScreen from '../screens/TrendingScreen';
import TabBarComponent from '../components/TabBarComponent';



// Colors
import {Colors} from '../components/styles';
const{brand, darkLight, primary, tertiary } = Colors;

import React, {useState} from 'react';

const Stack = createNativeStackNavigator();



    

const ArrowStack = () => {
    return(
        
        <NavigationContainer>
                <Stack.Navigator
                    timingConfig={{
                        duration: 0,
                    }}
                    screenOptions={{
                        animation: 'none',
                        headerShown: true,
                        headerStyled: {
                            backgroundColor: 'transparent',
                            elevation: 0
                        },
                        headerShadowVisible: false,
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeftContainerStyle:{
                            paddingLeft:20
                        }


                    }}
                    initialRouteName="Login"
                >
                    <Stack.Screen name="Login" component={Login}  />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Welcome" component={Welcome}  />
                    <Stack.Screen name="Account" component={AccountScreen} />
                    <Stack.Screen name="Search" component={SearchScreen} />
                    <Stack.Screen name="Trending" component={TrendingScreen} />
                    <Stack.Screen name="News" component={NewsScreen} />
                </Stack.Navigator>
        </NavigationContainer>
    );
}


export default ArrowStack;