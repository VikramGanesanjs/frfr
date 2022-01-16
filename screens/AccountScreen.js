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

const AccountScreen = ({navigation}) => {
    return(
        
            <WelcomeContainer> 
                <InnerContainer>
                <View>
                    <SubTitle>
                        Account
                    </SubTitle>
                </View>
                </InnerContainer>
            </WelcomeContainer>
       
    );

}

export default AccountScreen;