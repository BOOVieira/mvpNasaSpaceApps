import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Telas/Home/Index';
import Materiais from '../Telas/Materiais/Index';
import Arte from '../Telas/Arte/Index';
import PaginaReservada from '../Telas/PaginaReservada/Index'


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
      tabBarOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="toolbox-outline" size={20} color={tintColor} />
        )
      },
      navigationOptions: {
        title: 'Materiais',
      },
    },
    Arte: {
      screen: Arte,
      navigationOptions: {
        title: 'Arte',
      }
    },
  },

  // {
  //   order: ['Home', 'Arte', 'Materiais' ],
  //   tabBarOptions: {
  //     activeTintColor: '#D4AF37',
  //     inactiveTintColor: 'gray',
  //     style: {
  //       backgroundColor: 'white',
  //     }
  //   },
  // },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.

        } else if (routeName === 'Materiais') {
          iconName = `toolbox${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Arte') {
          iconName = `palette${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
    },
  }
);

const Nav = createSwitchNavigator({
  Navigator: Navigator,
  PaginaReservada:  PaginaReservada ,
})

export default createAppContainer(Nav);