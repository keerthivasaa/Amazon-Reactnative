import React from 'react';
import { View, Text } from 'react-native';
import BottomTabNavigator from './bottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Router = () => {
    const Root = createStackNavigator();
    return (
            <NavigationContainer>
                <Root.Navigator screenOptions={{headerShown: false}}>
                    <Root.Screen component={BottomTabNavigator} name="Home" />
                </Root.Navigator>
            </NavigationContainer>
    )
}

export default Router;
