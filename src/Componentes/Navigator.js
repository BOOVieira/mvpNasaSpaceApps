import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../Telas/Home/Index';
import Materiais from '../Telas/Materiais/Index';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Materiais: {
      screen: Materiais
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(Navigator);