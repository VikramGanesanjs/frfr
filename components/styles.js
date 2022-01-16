import styled from 'styled-components/native';
import {View, Text, Image, TouchableOpacity, Pressable, TouchableWithHighlight} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: '#334155',
    secondary: '#ffffff',
    tertiary: '#A78BFA',
    darkLight: '#9CA3AF',
    brand: '#10B981',
    green: '#0EA5E9',
    red: '#EF4444',
    white: '#ffffff',
    black: '#000000'
}
const { primary, secondary, tertiary, darkLight, brand, green, red, white, black } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 200px;
    background-color: ${primary};
    height: 100%;
    padding-bottom: 500px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;


export const WelcomeContainer = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    align-items: center;
    margin: auto;
    justify-content: center;
    position: absolute;
    height: 100%;
    background-color: ${primary}
`;

export const Avatar = styled.Image`
    width: 100px;
    height 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${white};

    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal
    `}

`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${black};
`;

export const StyledInputLabel = styled.Text`
    color: ${white};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        padding-top: 0px;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding: 25px;
    `}
`;

export const MsgBox =  styled.Text`
    text-align: center;
    font-size: 13px
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;

`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 60px;
    background-color: ${tertiary}
    border-radius: 15px;
    margin: 20px;
`;

export const ExtraText = styled.Text`
    color: ${white};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    padding: 10px;
`;

export const TextLinkContent = styled.Text`
    color: ${white};
    padding: 10px;
    font-size: 15px;
`;

export const IconContainer = styled.View`
    width: 50px;
    height 100px;
    padding-top: 20px;
`;

export const TabBarContainer = styled.View`
    padding-top: 300px;

`;

export const TabBarContainerScreen = styled.View`
    padding-top: 470px;
`;

export const TabBar = styled.View`
    flex-direction: row;
    background-color: ${brand};
    width: 90%;
    justify-content: space-evenly;
    border-radius: 40px;
    
`;
export const TabBarInnerContainer = styled(TabBar)`
    padding-bottom: 20px;
`;

export const ScreenContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin: auto;
    padding-top: 300px;
    padding-bottom: 700px;
    position: absolute;
    `;

export const ErrorLabel = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${white};
    font-size: 15px;
`;

export const ErrorContainer = styled.View`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${red}
    padding: 10px;
    padding-top: 20px;
    margin: 20px;
    padding-bottom: 20px;
    border-radius: 15px;
`;

export const CalendarContainer = styled.View`
    height: 100%;
    width: 100%;
    justify-content: center;
    margin-bottom: 70px;
    background-color: ${primary};
`;

export const ListItemContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;


    height: 104px;
    width: 100%;
    background-color: ${primary};

`;

export const ListItemMainContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 104px;
    width: 100%;
    
    background-color: ${white};
`;

export const ListItemSubContainer = styled.View`
    display: flex;
    height: 60px;
    width: 100%;
   
    background-color: ${primary}
    flex-direction: row;
    
`;

export const ListItemCheckBox = styled.View`
    display: flex;
    height: 104px;
    width: 150px;
    background-color: ${brand}
    
`;
export const ListItemSubContainer2 = styled.View`
    display: flex;
    height: 44px;
    width: 100%;

    background-color: ${primary};
    flex-direction: row;
    
`;
export const ListItemTitleContainer = styled.View`
    background-color: ${primary};
    height: 60px;
    width: 150px;
    padding: 10px;

`;

export const ListItemTimeContainer = styled.View`
    background-color: ${primary};
    height: 44px;
    width: 125px;
    padding: 10px;


`;

export const ListItemTagsContainer = styled.View`
    background-color: ${primary};
    height: 44px;
    width: 125px;
    padding: 10px;

`;

export const ListItemUrgencyContainer = styled.View`
    background-color: ${primary}};
    height: 60px;
    width: 100px;
    padding: 10px;

`;

export const ListItemCheckButton = styled.TouchableOpacity`
    height: 104px;  
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${primary}
`;


export const ReminderHeaderContainer = styled.View`
    
    
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
`;
