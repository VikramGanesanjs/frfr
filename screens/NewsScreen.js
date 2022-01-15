import React, { useState } from 'react';
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
    ListItemContainer,
    ListItemTitleContainer,
    ListItemUrgencyContainer,
    ListItemTimeContainer,
    ListItemTagsContainer,
    ListItemSubContainer,
    ListItemSubContainer2,
    ListItemCheckBox,
    ListItemMainContainer
} from './../components/styles'

const NewsScreen = ({navigation}) => {
    
    const [todoItems, setTodoItems] = useState({});

    const data = [{
      title: "Hello",
      time: "8:00" ,
      id: 1, 
    }]

    return(
        <WelcomeContainer> 
                <InnerContainer>
                <ListItem title="Piano Class" urgency="Urgent" time="8:00 PM" date="12/31/2021"/> 
                
                </InnerContainer>
            </WelcomeContainer>
    );

}

const ListItem = ({ title, urgency, time, date }) => {
    return(
    <ListItemContainer>
        <ListItemCheckBox>

        </ListItemCheckBox>
        <ListItemMainContainer>
        <ListItemSubContainer>
        <ListItemTitleContainer>
        <Text style={{color: '#ffffff'}}>
            {title}
        </Text>
        </ListItemTitleContainer>
        <ListItemUrgencyContainer>
        <Text style={{color: '#ffffff'}}>
            {urgency}
        </Text>
        </ListItemUrgencyContainer>
        </ListItemSubContainer>
        <ListItemSubContainer2>
        <ListItemTimeContainer>
        <Text style={{color: '#ffffff'}}>
            {time}
        </Text>
        </ListItemTimeContainer>
        <ListItemTagsContainer>
        <Text style={{color: '#ffffff'}}>
            {date}
        </Text>
        </ListItemTagsContainer>
        </ListItemSubContainer2>
        </ListItemMainContainer>
    </ListItemContainer>
    );
}



export default NewsScreen;