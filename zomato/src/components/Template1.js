import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {styles} from '../styles/Styles';

export default Template1 = (props) => {

    return (
        <View style={{marginVertical: 15, marginHorizontal: styles.FIXED_MARGIN}}>
            <Text style={styles.title}>{props.title}</Text>

            <FlatList
                data={props.data}
                keyExtractor={({ id }) => id.toString()}
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                renderItem={
                    ({ item }) =>

                        <View style={{marginVertical: 20, marginRight: 20, flexDirection: "row"}}>
                            <Image style={style.image} source={item.source} />
                            <View style={{marginLeft: 7, justifyContent: "space-between"}}>
                                <Text style={{color: styles.BLACK_COLOR, fontSize: 16, fontWeight: "500", letterSpacing: 0.8}}>{item.title}</Text>
                                <Text style={{fontSize: 15, fontWeight: "500", letterSpacing: 0.8}}>{item.delivery_time}</Text>
                                <Text style={{fontSize: 15}}>{item.description}</Text>
                            </View>
                        </View>
                }
            />

        </View>
    );

};


const style = StyleSheet.create({
    image:{
        width: 60,
        height: 60,
        borderRadius: 10,
    }

})