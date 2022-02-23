import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {styles} from '../styles/Styles';
import tags_data from '../assets/data/Tags_data';

export default TagsBar = () => {

    return (
        <View style={{marginVertical: 15, marginHorizontal: styles.FIXED_MARGIN}}>

            <FlatList
                data={tags_data}
                keyExtractor={({ id }) => id.toString()}
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                renderItem={
                    ({ item }) =>

                    <View style={style.tag}>
                        <Text style={style.tagText}>{item.title}</Text>
                    </View>
                }
            />

        </View>
    );

};


const style = StyleSheet.create({
    
    tag: {
        borderColor: styles.BORDER_GRAY,
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginHorizontal: 5,
        flexDirection: "row",
    },

    tagText:{
        color: styles.BLACK_COLOR, 
        fontSize: 15, 
        fontWeight: "500"
    }

})