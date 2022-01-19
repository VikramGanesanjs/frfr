import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


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
        <WelcomeContainer> 
        <StyledButton onPress={() => navigation.navigate("AddReminder")}>
                <ButtonText>
                    Go to Add Reminder Screen
                </ButtonText>
            </StyledButton>
    </WelcomeContainer>
    );

}

export default SearchScreen;