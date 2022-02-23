import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {styles} from '../styles/Styles';

export default SearchBar = () => {

    return (
        <View style={{marginVertical: 15, marginHorizontal: styles.FIXED_MARGIN}}>
            <TextInput
                style={[style.input, styles.shadow]}
                placeholder="Restaurant name or a dish..."
            />
        </View>
    );

};


const style = StyleSheet.create({
    
    input: {
        backgroundColor: styles.WHITE_COLOR,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 15
    },

})