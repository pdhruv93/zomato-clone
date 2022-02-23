import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import {styles} from './src/styles/Styles';

const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: styles.WHITE_COLOR
    },
};

export default App = () => {

    console.log("Main App Component Loaded!!!");

    return (
        <NavigationContainer theme={CustomTheme}>
            <BottomTabs/>            
        </NavigationContainer>
    );
};