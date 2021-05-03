import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopingCartScreen from '../ShopingCartScreen';
import AddressScreen from '../AddressScreen';

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