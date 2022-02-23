import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {styles} from '../styles/Styles';
import tags_data from '../assets/data/Tags_data';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';


export default TagsBar = (props) => {

    const searchBarAnimationStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: props.offsetScrolled.value>80 && props.currentScrollAmount.value > 0  ? props.offsetScrolled.value-80 : 0
            },
        ],
    }));


    return (
        <View>
        <Animated.View style={[searchBarAnimationStyle, style.container]}>

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

        </Animated.View>
        </View>
    );

};


const style = StyleSheet.create({

    container:{
        paddingVertical: 15, 
        marginHorizontal: styles.FIXED_MARGIN,
        backgroundColor: styles.WHITE_COLOR,
        zIndex: 1
    },
    
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