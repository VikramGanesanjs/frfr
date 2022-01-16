import React, { useState } from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';



const { white, primary, brand, tertiary, darkLight } = Colors;

import { Ionicons } from '@expo/vector-icons';
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
    ListItemMainContainer,
    ListItemCheckButton,
    ReminderHeaderContainer
} from './../components/styles'
import { ScrollView } from 'react-native-gesture-handler';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; 

const NewsScreen = () => {
    
    const [todoItems, setTodoItems] = useState({});

  

    return(
        <WelcomeContainer> 
               <ScrollView style={{height: height, width: width, flex: 1, }}>
                <ReminderHeader />
                <Line/>
                    <ListItem title="Piano Class" urgency="Urgent" time="8:00 PM" date="12/31/2021"/> 
                <Line/>
                    <ListItem title="Piano Class" urgency="Urgent" time="8:00 PM" date="12/31/2021"/> 
                <Line/>
                
                    <ListItem title="Piano Class" urgency="Urgent" time="8:00 PM" date="12/31/2021"/> 
                <Line/>
                
                    <ListItem title="Piano Class" urgency="Urgent" time="8:00 PM" date="12/31/2021"/> 
                <Line/>
                </ScrollView>
            </WelcomeContainer>
    );

}

const ListItem = ({ title, urgency, time, date }) => {

    const [completed, setCompleted] = useState(false);

    return(
    
    <ListItemContainer>
        
        <ListItemCheckBox>

            <ListItemCheckButton onPress={() => setCompleted(!completed)}>

                <View style={{position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 70}}>
                    <Ionicons name={completed ? 'checkmark-circle' : 'radio-button-off'} color={brand} size={50} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}/>
                </View>
            </ListItemCheckButton>
            
            
        </ListItemCheckBox>
        <ListItemMainContainer>
        <ListItemSubContainer>
        <ListItemTitleContainer>
        <Text style={{color: completed ? darkLight: white}}>
            {title}
        </Text>
        </ListItemTitleContainer>
        <ListItemUrgencyContainer>
        <Text style={{color: completed ? darkLight: white}}>
            {urgency}
        </Text>
        </ListItemUrgencyContainer>
        </ListItemSubContainer>
        <ListItemSubContainer2>
        <ListItemTimeContainer>
        <Text style={{color: completed ? darkLight: white}}>
            {time}
        </Text>
        </ListItemTimeContainer>
        <ListItemTagsContainer>
        <Text style={{color: completed ? darkLight: white}}>
            {date}
        </Text>
        </ListItemTagsContainer>
        </ListItemSubContainer2>
        </ListItemMainContainer>
    </ListItemContainer>
    );
}

const ReminderHeader = () => {
    return(
        <ReminderHeaderContainer>
            <View style={{ marginRight: 250 }}>
            <PageTitle size={60} >
                To-Dos
            </PageTitle>
            </View>
            <TouchableOpacity style={{
                display:'flex',
                justifyContent: 'center',
                height: 50,
                width: 50,
                top: 2,
                alignItems: 'center',
                borderRadius: 25,
            }}>
                <Ionicons name='close-circle' size={30} color={brand}/>

            </TouchableOpacity>
        </ReminderHeaderContainer>
    );
}



export default NewsScreen;