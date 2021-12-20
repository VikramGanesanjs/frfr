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

const SearchScreen = ({navigation}) => {
    return(
        <InnerContainer>
            <WelcomeContainer> 
                <><View>
                    <Text>
                        Search Screen
                    </Text>
                </View>
                <TabBarContainerScreen>
                        <TabBar>
                            <TabBarInnerContainer>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("News");

                                } }>
                                    <News />

                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Account");

                                } }>
                                    <Account />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Welcome");

                                } }>
                                    <Home />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Trending");

                                } }>
                                    <Trending />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Search");

                                } }>
                                    <Search />
                                </TouchableOpacity>
                            </TabBarInnerContainer>
                        </TabBar>
                    </TabBarContainerScreen></>
            </WelcomeContainer>
        </InnerContainer>
    );

}

export default SearchScreen;