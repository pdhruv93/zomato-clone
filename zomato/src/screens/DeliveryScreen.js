import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TagsBar from '../components/TagsBar';
import Template1 from '../components/Template1';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import data1 from '../assets/data/Data1';
import data2 from '../assets/data/Data2';
import data3 from '../assets/data/Data3';
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';

export default DeliveryScreen = (props) => {

    console.log("DeliveryScreen Loaded!!!");

    const lastOffset = useSharedValue(0);
    const currentOffset = useSharedValue(0);
    const currentScrollAmount = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            currentOffset.value=event.contentOffset.y;
            currentScrollAmount.value=lastOffset.value-currentOffset.value;
            lastOffset.value = currentOffset.value;
            //currentScrollAmount: (-) means pulling up, (+) means pulling down
        }
    });



    return (
        <Animated.ScrollView 
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            stickyHeaderIndices={[1]}
        >
            <Header/>
            <SearchBar/>
            <TagsBar offsetScrolled={currentOffset} currentScrollAmount={currentScrollAmount}/>
            <Template1 title="Order Again" data={data1} />
            <Template2 title="Top brands for you" data={data2} />
            <Template3 title="Restaurants around you" data={data3} />
        </Animated.ScrollView>
    );

};