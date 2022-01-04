
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';





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
    TabBarContainer,
    TabBar,
    TabBarInnerContainer
} from './../components/styles'

// import tabBarIcons
import Home from '../tabBarIcons/Home';
import News from '../tabBarIcons/News';
import Account from '../tabBarIcons/Account';
import Trending from '../tabBarIcons/Trending';
import Search from '../tabBarIcons/Search';
import { signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from '../config/firebase';

// imports for push Notifications
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';




// Colors
const{brand, darkLight, primary} = Colors;



const Welcome = ({ navigation }) => {
    
    const [name, setName] = useState('');
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    //function that prompts the user for notification permission

    const registerForPushNotificationsAsync = async () => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
            })
        })

        let token;
        if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        const docRef = doc(db, "Users", auth.currentUser.uid);
        setDoc(docRef, { expoPushToken: token}, { merge: true });
        } else {
        alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });

        

        return token;
    }
}

        // Test function that sends one push notification
    const sendPushNotification = async (expoToken) => {

        
        const message = {
            to: expoToken,
            sound: 'default',
            title: 'Roro',
            body: 'You are a poo head!',
            data: { someData: 'goes here' },

        };

        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
            
    });

    
 }


    const retrieveExpoPushToken = async () => {
        const docRef = doc(db, "Users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (typeof docSnap !== undefined) {
            
            const token = (docSnap._document.data.value.mapValue.fields.expoPushToken.stringValue);
            console.log(token);
            setExpoPushToken(token);
            console.log(expoPushToken);

        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }

    const retrieveName = async () => {
        
        const docRef = doc(db, "Users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (typeof docSnap !== undefined) {
           
            const fullName = (docSnap._document.data.value.mapValue.fields.fullName);
            const firstLastArray = fullName.stringValue.split(" "); 
            setName(`Welcome ${firstLastArray[0]}!`);
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }

    useEffect(() => {
        retrieveName();
        registerForPushNotificationsAsync();
        

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    }, [])
    

    return(
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                
                <WelcomeContainer>

                    <PageTitle welcome={true}>{name}</PageTitle>

              
                    
                    <StyledFormArea>
                        
                        <Line />
                        <StyledButton onPress={() => {
                            
                            signOut(auth).catch((error) => {
                                console.log(error);
                            })
                            console.log(auth.currentUser);
                            }}>
                            <ButtonText>
                                Logout
                            </ButtonText>
                        </StyledButton>
                        <StyledButton onPress={async () => {
                            await retrieveExpoPushToken().then(() => sendPushNotification(expoPushToken));
                            
                        }}>
                            <ButtonText>
                                Send push notification
                            </ButtonText>
                        </StyledButton>
                    
                    
                    </StyledFormArea>
                

                
                </WelcomeContainer>
            </InnerContainer>
        </>
    );

}




export default Welcome;