import React, { useEffect, useState }from 'react';
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

import {Calendar, Agenda} from "react-native-calendars";

const TrendingScreen = () => {

    const [numberOfDays, setNumberOfDays] = useState(31)
    const [currentDate, setCurrentDate] = useState('');
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');


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
        console.log(currentDate);
        console.log(day);
    }

    useEffect(()=> {
        initializeCalendar();
    }, [])

    return(
        <SafeAreaView style={{
            backgroundColor: primary,
        }}>
        <CalendarContainer>
            
                <Agenda
  // The list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key has to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={{
    '2012-05-22': [{name: 'item 1 - any js object'}],
    '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
    '2012-05-24': [],
    '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  }}
  // Callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={month => {
    console.log('trigger items loading');
  }}
  // Callback that fires when the calendar is opened or closed
  onCalendarToggled={calendarOpened => {
    console.log(calendarOpened);
  }}
  // Callback that gets called on day press
  onDayPress={day => {
    console.log('day pressed');
  }}
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
    return <View />;
  }}
  // Specify how each date should be rendered. day can be undefined if the item is not first in that day
  renderDay={(day, item) => {
    return <View />;
  }}
  // Specify how empty date content with no items should be rendered
  renderEmptyDate={() => {
    return <View />;
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
  markedDates={{
    '2012-05-16': {selected: true, marked: true},
    '2012-05-17': {marked: true},
    '2012-05-18': {disabled: true}
  }}
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