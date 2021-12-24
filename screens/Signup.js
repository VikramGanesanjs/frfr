import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons } from '@expo/vector-icons';


import{
    StyledContainer, 
    InnerContainer,
    PageTitle,
    PageLogo,
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
    TextLinkContent,
    ErrorLabel,
    ErrorContainer
} from './../components/styles';
import { View, Image } from 'react-native';

import {auth, db} from '../config/firebase';
import {setDoc, doc} from 'firebase/firestore';




// Colors
const{brand, darkLight, primary} = Colors;


// Keyboard avoiding view
import KeyboardAvoidingwrapper from '../components/KeyboardAvoidingwrapper';
import { createUserWithEmailAndPassword } from 'firebase/auth';






const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [signupError, setSignupError] = useState('');
    const [errorColor, setErrorColor] = useState('');





    const validateFields = (values) => {
        if(values.password === '' || values.email === '' || values.confirmPassword === '' || values.fullName === ''){
            setSignupError("Some fields are incomplete");
            return false;
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)))
        {
          setSignupError("email address invalid.");
          return false;
        }
        else if(values.password !== values.confirmPassword){
            setSignupError("Passwords do not match");
            return false;
        }
        else{
            return true;
        }
        
    }





    return(
        <KeyboardAvoidingwrapper>
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo source={require("../assets/RemindrLogo.png")} style={{resizeMode:"center"}}></PageLogo>
                <SubTitle>Account Signup</SubTitle>

                <Formik
                    initialValues={{ fullName:'',  email: '', dateOfBirth: '', password: '', confirmPassword:''}}
                    onSubmit={(values) => {
                        if(validateFields(values)){
                            console.log(values);
                            createUserWithEmailAndPassword(auth, values.email, values.password);
                            setTimeout(() => {
                                setDoc(doc(db, "Users", auth.currentUser.uid), {
                                    fullName: values.fullName,
                                    emailAddress: values.email,
                                    userIdentificationNumber: auth.currentUser.uid,
                                  });
                            }, 4000)
                            
                            navigation.navigate("Home")
                        }
                        
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput 
                        label="Full Name"
                        icon="person"
                        placeholder="John Doe"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        
                    />

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

                    <MyTextInput 
                        label="Confirm Password"
                        icon="lock"
                        placeholder="*************"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Signup
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    <ExtraView>
                        <TextLink onPress={() => {
                            navigation.navigate("Login");
                            }}>
                            <TextLinkContent>Already have an account? Go to Login</TextLinkContent>
                        </TextLink>
                        
                    </ExtraView>
                    <ErrorDisplay signupError={signupError} />
                </StyledFormArea>)}
                    
                

                
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingwrapper>
    );

}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props }) =>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {<StyledTextInput {...props}/>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

const ErrorDisplay = ({signupError}) => {
    if(signupError === ''){
        return null;
    }
    else{
        return(
        <ErrorContainer>
            <ErrorLabel>
                    {signupError}
            </ErrorLabel>
        </ErrorContainer>)
    }
}

export default Signup;