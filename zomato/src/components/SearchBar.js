import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {styles} from '../styles/Styles';

export default SearchBar = (props) => {

    return (
        <View style={[style.container]}>
            <TextInput
                style={[style.input, styles.shadow]}
                placeholder="Restaurant name or a dish..."
            />
        </View>
    );

};


const style = StyleSheet.create({

    container:{
        paddingVertical: 15,
        backgroundColor: styles.WHITE_COLOR,
        marginHorizontal: styles.FIXED_MARGIN,
        zIndex: 2
    },
    
    input: {
        backgroundColor: styles.WHITE_COLOR,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 15
    },

})