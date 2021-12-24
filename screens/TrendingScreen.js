import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import tabBarIcons
import Home from '../tabBarIcons/Home';
import News from '../tabBarIcons/News';
import Account from '../tabBarIcons/Account';
import Trending from '../tabBarIcons/Trending';
import Search from '../tabBarIcons/Search';

import{ 
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    Colors,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
    TabBarContainer,
    TabBar,
    TabBarInnerContainer,
    ScreenContainer,
    TabBarContainerScreen
} from './../components/styles'

const TrendingScreen = ({navigation}) => {
    return(
        <WelcomeContainer> 
                <InnerContainer>
                <View>
                    <SubTitle>
                        Calendar
                    </SubTitle>
                </View>
                </InnerContainer>
            </WelcomeContainer>
    
    );

}

export default TrendingScreen;