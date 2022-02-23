import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TagsBar from '../components/TagsBar';
import Template1 from '../components/Template1';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import {styles} from '../styles/Styles';
import data1 from '../assets/data/Data1';
import data2 from '../assets/data/Data2';
import data3 from '../assets/data/Data3';

export default DeliveryScreen = (props) => {

    console.log("DeliveryScreen Loaded!!!");

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header/>
            <SearchBar/>
            <TagsBar/>
            <Template1 title="Order Again" data={data1} />
            <Template2 title="Top brands for you" data={data2} />
            <Template3 title="Restaurants around you" data={data3} />
        </ScrollView>
    );

};


const style = StyleSheet.create({
    
    period: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 20,
        alignItems: "center",
        height: 40,
        backgroundColor: styles.GRAY_COLOR,
        borderRadius: 13,
    },

    periodText: {
        color: styles.PRIMARY_COLOR,
        fontSize: 18,
    },

    cards: {
        padding: 20,
        backgroundColor: styles.GRAY_COLOR,
    },

})