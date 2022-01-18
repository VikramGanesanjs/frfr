import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { ButtonText, Colors, InnerContainer, Line, MyListsContainer, MyListsObject, PageTitle, ReminderHeaderContainer, SubTitle, WelcomeContainer } from '../components/styles';
import { StyledButton } from './../components/styles';

const { white, primary, brand, tertiary, darkLight } = Colors;


import { Dimensions } from "react-native";
import { doc, collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import { isEqual } from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import { SelectedListContext } from '../components/SelectedListProvider';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; 

const Lists = ({ navigation }) => {

    const [listOfLists, setListOfLists] = useState([]);
    const {list, setList} = useContext(SelectedListContext)

    function containsObject(obj, list) {
        let i;
        for (i = 0; i < list.length; i++) {
            if (isEqual(list[i], obj)) {
                return true;
            }
        }   
    
        return false;
    }

    const retrieveLists = async () => {
        const docRef = collection(db, "Users", auth.currentUser.uid, `R-${auth.currentUser.uid}`)
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            let obj = doc.data();
                obj.id = doc.id;
            if(!(containsObject(obj, listOfLists))){
                
                console.log(obj.id)
                setListOfLists([...listOfLists, obj])
            }
        })
    }

    const renderItem = ({ item }) => {
        return(
            <View>
            <ListDisplayItem title={item.title} navigation={navigation} id={item.id}/>
            <Line />
            </View>
        );

    }
    
    useEffect(() => {
        retrieveLists();
    })

    return(
        <WelcomeContainer>
            <ListsHeader />
            <Line/>
                <FlatList data={listOfLists} renderItem={renderItem}/>
        </WelcomeContainer>
    );
}

const ListsHeader = () => {

    


    return(
    <ReminderHeaderContainer>
        <PageTitle>
            Lists
        </PageTitle>
    </ReminderHeaderContainer>
    );
}

const ListDisplayItem = ({title, navigation, id}) => {

    const { selectedList, setSelectedList } = useContext(SelectedListContext);

    return(
        <TouchableOpacity style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: white,
            height: 110,
            width: 400,
            
        }} onPress={() => {
            setSelectedList(id);
            navigation.navigate("ListView");
            }}>
            <View style={{
                display: 'flex',
                backgroundColor: primary,
                alignItems: 'center',
                justifyContent:'center',
                paddingLeft: 75,
                height: 110,
                width: 325,
            }}>

            <PageTitle list={true}>
                {title}
            </PageTitle>
            </View>

            <View style={{
                display: 'flex',
                backgroundColor: primary,
                height: 110,
                alignItems: 'center',
                justifyContent:'center',
                width: 75,
            }}>
            <Ionicons name='arrow-forward' size={50} color={brand}/>
            </View>
        </TouchableOpacity>
    );

}




export default Lists;