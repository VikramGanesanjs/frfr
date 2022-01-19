import React, { useEffect, useState, useContext } from 'react'; 
import {View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';

import { isEqual } from 'lodash'

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
import { db, auth } from '../config/firebase';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { parse } from 'date-fns';
import { format } from 'date-fns/esm';
import { SelectedListContext } from '../components/SelectedListProvider';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; 

const NewsScreen = ({ navigation }) => {
    
    const [todoItems, setTodoItems] = useState([]);
    const [listTitle, setListTitle] = useState('Title');
    const {selectedList, setSelectedList} = useContext(SelectedListContext);


    function containsObject(obj, list) {
        let i;
        for (i = 0; i < list.length; i++) {
            if (isEqual(list[i], obj)) {
                return true;
            }
        }   
    
        return false;
    }

    const retrieveReminders = async () => {
        const docRef = doc(db, "Users", auth.currentUser.uid, `R-${auth.currentUser.uid}`, selectedList);
        const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {    

        const obj = docSnap.data();
        Object.keys(obj).forEach((key) => { 
            if(key === 'title'){
                setListTitle(obj[key])
            }
            else if(!(containsObject(obj[key], todoItems))){  
                setTodoItems([...todoItems, obj[key]]);  
            }   
              
          });   
        console.log(todoItems);
          
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    }

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
        
        const timeStamp = new Timestamp(item.time.seconds, item.time.nanoseconds)
        const date = timeStamp.toDate()
        const time = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); 
        const formattedDate = date.toLocaleDateString();


        return(
            <View>
            <ListItem title={item.title} urgency={item.urgency} time={time} date={formattedDate}/>
            <Line/>
            </View> 
        );  
    };
    

    useEffect(() => {
        retrieveReminders();
    })
  

    return(
        <WelcomeContainer> 
               <SafeAreaView style={{height: height, width: width, flex: 1, }}>
                <ReminderHeader navigation={navigation}title={listTitle}/>
                <Line/>
                <FlatList
                data={todoItems}
                renderItem={renderItem}
      />
            <Line />
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

const ReminderHeader = ({ navigation, title }) => {

    return(
        <ReminderHeaderContainer>
            <View style={{ marginRight: 250 }}>
            <PageTitle size={60} >
                {title}
            </PageTitle>
            </View>
            <View>
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
            </View>
            
        </ReminderHeaderContainer>
    );
}



export default NewsScreen;