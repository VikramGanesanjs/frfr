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
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

// Colors
const{brand, darkLight, primary} = Colors;


const Welcome = ({ navigation }) => {
    

    return(
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                
                <WelcomeContainer>

                    <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
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