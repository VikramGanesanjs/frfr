import React, { useState } from 'react'; 
import {View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';



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

const NewsScreen = ({ navigation }) => {
    
    const [todoItems, setTodoItems] = useState([]);

    const DATA = [
        {
          id: '3',
          title: 'First Item',
          urgency: 'Urgent',
          date: '12-31-2023',
          time: '8:00 PM,'
        },
        {
          id: '2',
          title: 'Second Item',
          urgency: 'Urgent',
          date: '12-31-2023',
          time: '8:00 PM,'
        },
        {
          id: '1',
          title: 'Third Item',
          urgency: 'Urgent',
          date: '12-31-2023',
          time: '8:00 PM,'
        },
      ];



    const renderItem = ({ item }) => {
        return(
            <View>
            <Line/>
            <ListItem title={item.title} urgency={item.urgency} time={item.time} date={item.date}/>
            </View> 
        );
    };
    
  

    return(
        <WelcomeContainer> 
               <SafeAreaView style={{height: height, width: width, flex: 1, }}>
                <ReminderHeader navigation={navigation}/>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
      />
                </SafeAreaView>
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

const ReminderHeader = ({ navigation }) => {
    return(
        <ReminderHeaderContainer>
            <View style={{ marginRight: 250 }}>
            <PageTitle size={60} >
                To-Dos
            </PageTitle>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Lists")}style={{
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