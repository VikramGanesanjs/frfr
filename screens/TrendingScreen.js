import React, { useEffect, useState, useContext } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';


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
    CalendarContainer
} from './../components/styles'

const {primary, secondary, tertiary, brand, white} = Colors;

import {Agenda} from "react-native-calendars";
import { isEqual } from 'lodash';

import { db, auth } from '../config/firebase';

import { Dimensions } from "react-native";
import { collection, getDocs, doc, Timestamp } from 'firebase/firestore';
import { CurrentDateContext } from '../components/CurrentDateContext';

const TrendingScreen = () => {

    const [currentDate, setCurrentDate] = useState('');
    const [currentDateObject, setCurrentDateObject] = useState(new Date());
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const [calendarData, setCalendarData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [items, setItems] = useState({})
    const [markedItems, setMarkedItems] = useState({});
    const [refresh, setRefresh] = useState([]);


    
    let width = Dimensions.get('window').width; //full width
    let height = Dimensions.get('window').height; 




    const initializeCalendar = () => {
        const today = new Date();
        const yyyy = today.getFullYear().toString();
        const minYear = (today.getFullYear() - 1).toString();
        const maxYear = (today.getFullYear() + 2).toString();
        const month = (today.getMonth() + 1).toString();
        const monthInt = today.getMonth() + 1;
        const dayInt = today.getDate();
        const day = today.getDate().toString();
        if(dayInt < 10 && monthInt < 10){
        setCurrentDate(`${yyyy}-0${month}-0${day}`);
        setMaxDate(`${maxYear}-0${month}-0${day}`);
        setMinDate(`${minYear}-0${month}-0${day}`);
        }
        else if (dayInt < 10){
          setCurrentDate(`${yyyy}-${month}-0${day}`);
          setMaxDate(`${maxYear}-${month}-0${day}`);
          setMinDate(`${minYear}-${month}-0${day}`);
        }
        else if (monthInt < 10){
          setCurrentDate(`${yyyy}-0${month}-${day}`);
          setMaxDate(`${maxYear}-0${month}-${day}`);
          setMinDate(`${minYear}-0${month}-${day}`);
        }
        else{
          setCurrentDate(`${yyyy}-${month}-${day}`);
          setMaxDate(`${maxYear}-${month}-${day}`);
          setMinDate(`${minYear}-${month}-${day}`);
        }


        

    }

    function containsObject(obj, list) {
      let i;
      for (i = 0; i < list.length; i++) {
          if (isEqual(list[i], obj)) {
              return true;
          }
      }   
  
      return false;
  }


    const retrieveData = async () => {
        const docRef = collection(db, "Users", auth.currentUser.uid, `R-${auth.currentUser.uid}`)
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            let obj = doc.data();
            obj.id = doc.id;
            if(!(containsObject(obj, calendarData))){
                
                setCalendarData([...calendarData, obj]);
            }
        })

        calendarData.forEach((obj) => {
          Object.keys(obj).forEach((key) => { 
            if(key === 'title'){
              let hey = obj.title
            }
            else if(key === 'id'){
              let hi = obj.id
            }
            else if(!(containsObject(obj[key], eventData))){  
                setEventData([...eventData, obj[key]]);  
            }   
          })
        });
    }

    const formatData = () => {
      
          eventData.forEach((obj) => {
            const time = obj.time;
            const timeStamp = new Timestamp(time.seconds, time.nanoseconds)
            const d = timeStamp.toDate()
            const formattedDate = new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0];
            if(!(Object.keys(items).includes(formattedDate))){
              
              setItems({...items, [formattedDate]: [{name: obj.title}]})
              setMarkedItems({...markedItems, [formattedDate]: {marked: true}});            }
            else{
              let tmp = items;
              if(!(containsObject({name: obj.title}, tmp[formattedDate]))){
                tmp[formattedDate].push({name: obj.title})
                setItems(tmp);  
              }
              
            }  
            
          })
            
      }

    const CurrentTimeComponent = () => {
      const {currentDateObject, setCurrentDateObject} = useContext(CurrentDateContext);
      const currentTime = currentDateObject.toLocaleTimeString();
      const arr = currentTime.split(" ")[0].split(":");
      const amOrPM = currentTime.split(" ")[1];
      const arr2 = currentTime.split(" ");
      const timeWithoutSecs = `${arr2[0].split(":")[0]}:${arr2[0].split(":")[1]} ${arr2[1]}`;
      let numasdf;
      if(amOrPM === 'AM' && arr[0] === "12"){
        numasdf = parseInt(arr[1], 10) * 60;
      }
      else if(amOrPM === 'PM' && arr[0] === '12'){
        numasdf = (parseInt(arr[0], 10) * 60) + parseInt(arr[1], 10);
      }
      else if(amOrPM === 'PM'){
          numasdf = ((parseInt(arr[0], 10) + 12) * 60) + (parseInt(arr[1], 10));
      }
      else{
        numasdf = (parseInt(arr[0], 10) * 60) + arr[1];
      }
      return(

          <Text style={{
            top: numasdf,
            color: white,
          }}>
            {timeWithoutSecs}
          </Text>
      );
    }
    

    const RedLineComponent = () => {
      const {currentDateObject, setCurrentDateObject} = useContext(CurrentDateContext);
      
      const currentTime = currentDateObject.toLocaleTimeString();
      const arr = currentTime.split(" ")[0].split(":");
      const amOrPM = currentTime.split(" ")[1];
      let numasdf;
      if(amOrPM === 'AM' && arr[0] === "12"){
        numasdf = parseInt(arr[1], 10) * 60;
      }
      else if(amOrPM === 'PM' && arr[0] === '12'){
        numasdf = (parseInt(arr[0], 10) * 60) + parseInt(arr[1], 10);
      }
      else if(amOrPM === 'PM'){
          numasdf = ((parseInt(arr[0], 10) + 12) * 60) + (parseInt(arr[1], 10));
      }
      else{
        numasdf = (parseInt(arr[0], 10) * 60) + arr[1];
      }
      return(
      <Line style={{
        top: numasdf,
        }}/>
      );
    }

    

    

    useEffect(async ()=> {
        initializeCalendar();
        await retrieveData();
        setTimeout(() => formatData(), 250)
        if(Object.keys(items).length === 0){
          setRefresh(!refresh)
        }
    }, [refresh]) 

    return(
        <SafeAreaView style={{
            backgroundColor: primary,
        }}>
          <CalendarContainer>
            
            <Agenda
              // The list of items that have to be displayed in agenda. If you want to render item as empty date
              // the value of date key has to be an empty array []. If there exists no value for date key it is
              // considered that the date in question is not yet loaded
              items={items}
              // Callback that gets called when items for a certain month should be loaded (month became visible)
              // Callback that gets called when day changes while scrolling agenda list
              onDayChange={day => {
                console.log('day changed');
              }}
              // Initially selected day
              current={currentDate}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={minDate}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={maxDate}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={50}
              // Specify how each item should be rendered in agenda
              renderItem={(item, firstItemInDay) => {
                return (<View>
                  <Text>
                    {item.name ? item.name : Hello}
                  </Text>
                </View>);
              }}
              // Specify how each date should be rendered. day can be undefined if the item is not first in that day
              renderDay={(day, item) => {
                return(
                  
                  <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 1600,
                    width: width,
                    backgroundColor: white
                  }}>
                    
                    <View style={{
                      display: 'flex',
                      height: 1600,
                      width: 100,
                      backgroundColor: primary,
                    }}>
                      <CurrentTimeComponent/>
                    </View>
                    <View style={{
                      display: 'flex',
                      height: 1600,
                      width: width - 100,
                      backgroundColor: primary,
                    }}>
                      <Text style={{
                        color: white,
                      }}>
                      {item.name ? item.name : Hello}
                      </Text>
                      <RedLineComponent/>
                    </View>
                  </View>
                );
              }}
              // Specify how empty date content with no items should be rendered
              renderEmptyDate={() => {
                return(
                  
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: 1600,
                      width: width,
                      backgroundColor: white
                    }}>
                      
                      <View style={{
                        display: 'flex',
                        height: 1600,
                        width: 100,
                        backgroundColor: primary,
                      }}>
                        <CurrentTimeComponent/>
                      </View>
                      <View style={{
                        display: 'flex',
                        height: 1600,
                        width: width - 100,
                        backgroundColor: primary,
                      }}>
                        <RedLineComponent/>
                      </View>
                    </View>
                );
              }}
              // Specify how agenda knob should look like
              // Specify what should be rendered instead of ActivityIndicator
              renderEmptyData={() => {
                return <View />;
              }}
              // Specify your item comparison function for increased performance
              rowHasChanged={(r1, r2) => {
                return r1.text !== r2.text;
              }}
              // Hide knob button. Default = false

              // By default, agenda dates are marked if they have at least one item, but you can override this if needed
              markedDates={markedItems}
              // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
              disabledByDefault={true}
              // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
              onRefresh={() => console.log('refreshing...')}
              // Set this true while waiting for new data from a refresh
              refreshing={false}
              // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
              refreshControl={null}
              // Agenda theme
              theme={{
                backgroundColor: primary,
                calendarBackground: primary,
                monthTextColor: brand,
                
                agendaDayTextColor: 'yellow',
                agendaDayNumColor: 'green',
                agendaTodayColor: 'red',
                agendaKnobColor: brand,
              }}
              // Agenda container style
              style={{
                backgroundColor: primary,
              
              }}
            />

        </CalendarContainer>
      </SafeAreaView>
    



    );


}
export default TrendingScreen;