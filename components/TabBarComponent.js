import React from 'react';
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
    TabBarInnerContainer
} from './../components/styles';

import {TouchableOpacity} from 'react-native';

// import tabBarIcons
import Home from '../tabBarIcons/Home';
import News from '../tabBarIcons/News';
import Account from '../tabBarIcons/Account';
import Trending from '../tabBarIcons/Trending';
import Search from '../tabBarIcons/Search';

const TabBarComponent = ({navigation}) => {
    return(
        <TabBarContainer>
        <TabBar>
            <TabBarInnerContainer>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Login");

            }}>
                <News/>

            </TouchableOpacity>
            <TouchableOpacity>
                <Account />
            </TouchableOpacity>
            <TouchableOpacity>
                <Home />
            </TouchableOpacity>
            <TouchableOpacity>
                <Trending />
            </TouchableOpacity>
            <TouchableOpacity>
                <Search />
            </TouchableOpacity>
            </TabBarInnerContainer>
        </TabBar>
    </TabBarContainer>
    )
}

export default TabBarComponent;