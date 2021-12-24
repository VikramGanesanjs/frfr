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
    TextLinkContent,
    ErrorLabel,
    ErrorContainer
} from './../components/styles'
import {Keyboard, View} from 'react-native';

import { Firebase, auth} from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import HomeStack from '../navigators/HomeStack';


// Colors
const{brand, darkLight, white} = Colors;

// keyboard avoiding view
import KeyboardAvoidingwrapper from '../components/KeyboardAvoidingwrapper';



const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (auth, email, password) => {
        
        try{
            signInWithEmailAndPassword(auth, email, password)
        }catch(error){
            setLoginError("Username and password do not match");
        }
    }
    

    const validateFields = (values) => {
        if(values.password === '' || values.email === ''){
            setLoginError("Some fields are incomplete");
            return false;
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)))
        {
          setLoginError("email address invalid.");
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
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={async (values) => {
                        if(validateFields(values)){
                            console.log(values);
                            await signInWithEmailAndPassword(auth, values.email, values.password).catch(() => {
                                setLoginError("Username and password do not match")
                            })
                            

                            
                          
                    }}}
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
                        <Fontisto name="google" color={white} size={25} />
                        <ButtonText google={true}> 
                            Sign in with Google
                        </ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <TextLink onPress={() => {
                            navigation.navigate("Signup");
                            }}>
                            <TextLinkContent>Don't have an account? Go to Signup</TextLinkContent>
                        </TextLink>
                        </ExtraView>
                        <ErrorDisplay signupError={loginError} />
                   
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

export default Login;