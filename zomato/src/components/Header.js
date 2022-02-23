import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/Styles';


export default Header = (props) => {

    return (
        <View style={style.container}>
            <View style={{flexDirection: "row"}}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <MaterialCommunityIcons  name="map-marker-outline" color={styles.PRIMARY_COLOR} size={40}/>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: styles.PRIMARY_COLOR}}>
                        Dhruv Pandey
                    </Text>
                    <Text style={{color: styles.BLACK_COLOR, fontSize: 14, letterSpacing: 1}}>
                        Vilppulantie 2 D 19, Helsinki-00700
                    </Text>
                </View>
            </View>
            <Image style={style.profileImage} source={require('../assets/images/profile.jpeg')} />
        </View>
    );

};


const style = StyleSheet.create({

    container:{
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginVertical: 10, 
        marginHorizontal: styles.FIXED_MARGIN, 
        alignItems: "center",
    },
    
    profileImage: {
        borderRadius: 20,
        width: 40,
        height: 40,
    },

})