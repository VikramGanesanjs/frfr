import React from 'react';
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
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from '../config/firebase';


import { useState, useEffect } from 'react';

// Colors
const{brand, darkLight, primary} = Colors;



const Welcome = ({ navigation }) => {
    
    const [name, setName] = useState('Welcome Dude')

    const retrieveName = async () => {
        
        const docRef = doc(db, "Users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (typeof docSnap !== undefined) {
            const fullName = (docSnap._document.data.value.mapValue.fields.fullName);
            setName(`Welcome ${fullName.stringValue}!`);
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }

    useEffect(() => {
        retrieveName();
    })
    

    return(
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                
                <WelcomeContainer>

                    <PageTitle welcome={true}>{name}</PageTitle>
                    <SubTitle welcome={true}>Olga Simpson</SubTitle>
                    <SubTitle welcome={true}>johndoe@email.com</SubTitle>

              
                    
                    <StyledFormArea>
                        
                        <Line />
                        <StyledButton onPress={() => {
                            
                            signOut(auth).then(() =>{
                                navigation.navigate("Login");
                            }).catch((error) => {
                                console.log(error);
                            })
                            console.log(auth.currentUser);
                            }}>
                            <ButtonText>
                                Logout
                            </ButtonText>
                        </StyledButton>
                    
                    
                    </StyledFormArea>
                    <TabBarContainer>
        <TabBar>
            <TabBarInnerContainer>
            <TouchableOpacity onPress={() => {
                navigation.navigate("News");

            }}>
                <News/>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Account");

            }}>
                <Account />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Welcome");

            }}>
                <Home />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Trending");

            }}>
                <Trending />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Search");

            }}>
                <Search />
            </TouchableOpacity>
            </TabBarInnerContainer>
        </TabBar>
    </TabBarContainer>
                

                
                </WelcomeContainer>
            </InnerContainer>
        </>
    );

}



export default Welcome;