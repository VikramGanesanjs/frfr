import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';




import{
    StyledContainer, 
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles'
import {Keyboard, View} from 'react-native';

import { Firebase, auth} from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import HomeStack from '../navigators/HomeStack';

import {logIn} from '../components/auth';
// Colors
const{brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyboardAvoidingwrapper from '../components/KeyboardAvoidingwrapper';



const Login = ({ navigation }) => {
    const {hidePassword, setHidePassword} = useState(true);
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    
    return(
        <KeyboardAvoidingwrapper>
            
            <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Flower Crib</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        signInWithEmailAndPassword(auth, values.email, values.password);
                        navigation.navigate('Home');
                        
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput 
                        label="Email Address"
                        icon="mail"
                        placeholder="johndoe@gmail.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />

                    <MyTextInput 
                        label="Password"
                        icon="lock"
                        placeholder="*************"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Login
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto name="google" color={primary} size={25} />
                        <ButtonText google={true}> 
                            Sign in with Google
                        </ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText>
                            Don't have an account already?
                        </ExtraText>
                        <TextLink onPress={() => {
                            navigation.navigate("Signup");
                            }}>
                            <TextLinkContent>Signup</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>)}
                    
                

                
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingwrapper>
    );

}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) =>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Login;