import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
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
    TabBarContainerScreen,
    ListItemContainer
} from './../components/styles'

const NewsScreen = ({navigation}) => {
    
    const [todoItems, setTodoItems] = useState({});

    return(
        <WelcomeContainer> 
                <InnerContainer>
                <FlatList>

                </FlatList>
                </InnerContainer>
            </WelcomeContainer>
    );

}

const ListItem = ({ title, urgency, time, date }) => {
    <ListItemContainer>
        
    </ListItemContainer>
}

export default NewsScreen;