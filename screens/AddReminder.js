import React from 'react';
import { View, Text } from 'react-native';
import { ButtonText, WelcomeContainer } from '../components/styles';
import { StyledButton } from './../components/styles';

const AddReminder = ({navigation}) => {
    return(
        <WelcomeContainer>
            <StyledButton onPress={() => navigation.navigate("AddList")}>
                <ButtonText>
                    Go to Add Screen
                </ButtonText>
            </StyledButton>
        </WelcomeContainer>
          
    );

}

export default AddReminder;