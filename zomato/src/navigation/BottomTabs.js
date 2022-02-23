import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScreen from '../screens/DeliveryScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/Styles';

const Tab = createBottomTabNavigator();

export default BottomTabs = () => {

    return (
        <Tab.Navigator initialRouteName="Delivery"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: styles.PRIMARY_COLOR,
                tabBarInactiveTintColor: styles.GRAY_COLOR,
                tabBarStyle: { 
                    backgroundColor: styles.WHITE_COLOR,
                    height: 65,
                },
                tabBarLabelStyle:{fontSize: 16, marginBottom: 5},
            }}
            
        >
            <Tab.Screen name="Delivery" component={DeliveryScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons  name="truck-delivery" color={color} size={size}/>
                    ),
                }}
            />

            <Tab.Screen name="Dining" component={DeliveryScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons  name="food" color={color} size={size}/>
                    ),
                }}
            />


            <Tab.Screen name="Offers" component={DeliveryScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons  name="crown" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen name="Money" component={DeliveryScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons  name="wallet" color={color} size={size}/>
                    ),
                }}
            />


        </Tab.Navigator>
    );
};