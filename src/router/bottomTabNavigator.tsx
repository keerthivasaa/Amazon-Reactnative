import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import HomeStack from './homeStack';
import ShoppingStack from './shoppingStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                inactiveTintColor: '#ffbd7d',
                activeTintColor: '#e47911',
            }}>
            <Tab.Screen
                component={HomeStack}
                name="Home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                component={HomeScreen}
                name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="user" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                component={ShoppingStack}
                name="Cart"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                component={HomeScreen}
                name="More"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="menu" color={color} size={28} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;