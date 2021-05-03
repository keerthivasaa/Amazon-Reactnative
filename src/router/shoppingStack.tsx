import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShopingCartScreen}
        name="cart"
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingStack;