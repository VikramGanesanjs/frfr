import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ButtonText, InnerContainer, Line, MyListsContainer, MyListsObject, PageTitle, ReminderHeaderContainer, SubTitle, WelcomeContainer } from '../components/styles';
import { StyledButton } from './../components/styles';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; 

const Lists = ({ navigation }) => {
    return(
        <WelcomeContainer>
            <ListsHeader />
            <Line/>
            <MyListsContainer>
                <PageTitle lists={true}>
                    My Lists:
                </PageTitle>
                <MyListsObject>

                </MyListsObject>
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




export default Lists;