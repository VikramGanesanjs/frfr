import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { ButtonText, Colors, InnerContainer, Line, MyListsContainer, MyListsObject, PageTitle, ReminderHeaderContainer, SubTitle, WelcomeContainer } from '../components/styles';
import { StyledButton } from './../components/styles';
const { white, primary, brand, tertiary, darkLight } = Colors;


import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; 

const Lists = ({ navigation }) => {

    const [listOfLists, setListOfLists] = useState([]);

    return(
        <WelcomeContainer>
            <ListsHeader />
            <Line/>
            <MyListsContainer>
                <PageTitle lists={true}>
                    My Lists:
                </PageTitle>
                <FlatList />
            <StyledButton onPress={() => navigation.navigate("ListView")}>
                <ButtonText>
                    Go to list View
                </ButtonText>
            </StyledButton>
            </MyListsContainer>
        </WelcomeContainer>
    );
}

const ListsHeader = () => {
    return(
    <ReminderHeaderContainer>
        <PageTitle>
            Lists
        </PageTitle>
    </ReminderHeaderContainer>
    );
}

const ListDisplayItem = () => {

    return(
        <View style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: white,
            height: 175,
            width: 300,
            
        }}>
            <Text>
                helo
            </Text>
        </View>
    );

}




export default Lists;