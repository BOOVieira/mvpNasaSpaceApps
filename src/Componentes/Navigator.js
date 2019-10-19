import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
          title="ir para outra tela"
          onPress={() => this.props.navigation.navigate('Outra')}
        />
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Outra</Text>
        <Button
          title="ir para home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const Navigator = createSwitchNavigator(
  { 
    Home: {
      screen: HomeScreen,
    },
    Outra: {
      screen: OtherScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(Navigator);