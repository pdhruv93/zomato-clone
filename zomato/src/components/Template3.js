import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {styles} from '../styles/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default Template3 = (props) => {

    return (
        <View style={{marginVertical: 15}}>
            <Text style={[styles.title, {marginHorizontal: styles.FIXED_MARGIN}]}>{props.title}</Text>
            <View style={{backgroundColor: '#f7f7f7'}}>
                <FlatList
                    data={props.data}
                    keyExtractor={({ id }) => id.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={
                        ({ item }) =>
                            <View style={[style.card, styles.shadow]}>
                                <Image style={style.image} source={item.source} />
                                <View style={{margin: 15}}>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={{paddingVertical: 2, paddingHorizontal: 10, backgroundColor: "green", color: 
                                            styles.WHITE_COLOR, borderRadius: 10, fontWeight: "bold"}}
                                        >
                                            {item.rating}
                                        </Text>
                                    </View>

                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{color: styles.BLACK_COLOR, fontSize: 15}}>{item.description}</Text>
                                        <Text style={{color: styles.GRAY_COLOR, fontSize: 15}}>{item.cost}</Text>
                                    </View>

                                    <View style={{flexDirection: "row", marginTop: 10, borderTopWidth: StyleSheet.hairlineWidth, 
                                        borderTopColor: styles.BORDER_GRAY, alignItems: "center"}}
                                    >
                                        <MaterialCommunityIcons name="thermometer-high" color={"#717cba"} size={20}/>
                                        <Text style={{marginLeft: 5}}>{item.recent_order_count} orders placed here recently</Text>
                                    </View>

                                    {item.max_safety===true ? 
                                        <View style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
                                            <Image style={{width: 50, height: 20, resizeMode: 'stretch'}} source={require('../assets/images/max_safety.jpg')} />
                                            <Text style={{color: styles.GRAY_COLOR, marginLeft: 10}}>Follows all Max Safety measures</Text>
                                        </View>
                                    :
                                        <View></View>   
                                    }

                                    
                                </View>
                            </View>
                    }
                />
            </View>
        </View>
    );

};


const style = StyleSheet.create({
    
    card:{
        backgroundColor: styles.WHITE_COLOR,
        borderRadius: 10,
        margin: 20,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: "900",
        marginBottom: 15,
        color: styles.BLACK_COLOR,
    },

    cardContent: {
        fontSize: 20,
        lineHeight: 30,
        color: styles.BLACK_COLOR,
    },

    image:{
        width: "100%",
        height: 300,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }

})