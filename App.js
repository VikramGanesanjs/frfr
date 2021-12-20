
import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';
import ArrowStack from './navigators/RootStack'

export default function App() {
    return <ArrowStack />;
  
}

registerRootComponent(App);