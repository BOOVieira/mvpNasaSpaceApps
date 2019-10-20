import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../Telas/Home/Index';
import Materiais from '../Telas/Materiais/Index';
import Arte from '../Telas/Arte/Index';
import Aprenda from '../Telas/Aprenda/Index';

const Navigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Início',
      }
    },
    Materiais: {
      screen: Materiais,
      navigationOptions: {
        title: 'Materiais',
      }
    },
    Arte: {
      screen: Arte,
      navigationOptions: {
        title: 'Arte',
      }
    },
    Aprenda: {
      screen: Aprenda,
      navigationOptions: {
        title: 'Aprenda',
      }
    },
  }
);

export default createAppContainer(Navigator);