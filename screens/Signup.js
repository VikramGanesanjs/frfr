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
    ErrorLabel
} from './../components/styles'
import {View, TouchableOpacity} from 'react-native';

import {Firebase, auth, db} from '../config/firebase';
import {setDoc, doc} from 'firebase/firestore';




// Colors
const{brand, darkLight, primary} = Colors;

//DateTimePicker
import DateTimePicker from '@react-native-community/datetimepicker';

// Keyboard avoiding view
import KeyboardAvoidingwrapper from '../components/KeyboardAvoidingwrapper';
import { NavigationContainer } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';






const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState('No errors right now');



    // Actual Date of Birth to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

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

    const showDatePicker = () => {
        setShow(Platform.OS === 'ios');
    }

    return(
        <KeyboardAvoidingwrapper>
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Remindr</PageTitle>
                <SubTitle>Account Signup</SubTitle>
                
                {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

                <Formik
                    initialValues={{ fullName:'',  email: '', dateOfBirth: '', password: '', confirmPassword:''}}
                    onSubmit={(values) => {
                        if(validateFields(values)){
                            console.log(values);
                            createUserWithEmailAndPassword(auth, values.email, values.password);
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
                        label="Date of Birth"
                        icon="calendar"
                        placeholder="YYYY - MM - DD"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('dateOfBirth')}
                        onBlur={handleBlur('dateOfBirth')}
                        value={dob ? dob.toDateString() : ''}
                        isDate={true}
                        editable={false}
                        showDatePicker={showDatePicker}
                        
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
                        <ExtraText>
                            Already have an account? 
                        </ExtraText>
                        <TextLink onPress={() => {
                            navigation.navigate("Login");
                            }}>
                            <TextLinkContent>Login</TextLinkContent>
                        </TextLink>
                        
                    </ExtraView>
                    <ExtraView>
                    <ErrorLabel>
                            {signupError}
                        </ErrorLabel>
                    </ExtraView>
                </StyledFormArea>)}
                    
                

                
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingwrapper>
    );

}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, 
    isDate, showDatePicker, ...props }) =>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props}/>}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;