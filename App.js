
import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';
import Routes from './navigators';

export default function App() {
    return <Routes/>;
  
}

registerRootComponent(App);