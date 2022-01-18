
import { registerRootComponent } from 'expo';
import React from 'react';

import { View } from 'react-native';
import { SelectedListProvider } from './components/SelectedListProvider';
import Routes from './navigators';

export default function App() {
    

    return (
    <SelectedListProvider>
        <Routes/>
    </SelectedListProvider>
    );
  
}

registerRootComponent(App);