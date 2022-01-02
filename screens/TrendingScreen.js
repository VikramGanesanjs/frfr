import React, { useEffect, useState }from 'react';
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

const {primary, secondary, tertiary, brand, white} = Colors;

import RNMonthly from "react-native-monthly";

const TrendingScreen = ({navigation}) => {

    const [numberOfDays, setNumberOfDays] = useState(31)
    const [today, setToday] = useState(1);

    const initializeCalendar = () => {
        const today = new Date();
        const month = today.getMonth();
        const day = today.getDay();
        console.log(day);
        console.log(today.toDateString());
        

        if(month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
            setNumberOfDays(31);
        }
        else if(month == 1){
            setNumberOfDays(28);
        }
        else{
            setNumberOfDays(30);
        }
        setToday(day);
    }

    useEffect(()=> {
        initializeCalendar();
    }, [])

    return(
        <WelcomeContainer> 
                <InnerContainer>
                <View>
                <RNMonthly
                    numberOfDays={numberOfDays}
                    activeBackgroundColor={brand}
                    inactiveBackgroundColor={white}
                    activeDays={[1, 5, 6, 11, 21, 31]}
                    today={today}
                />
                </View>
                </InnerContainer>
            </WelcomeContainer>
    
    );

}

export default TrendingScreen;