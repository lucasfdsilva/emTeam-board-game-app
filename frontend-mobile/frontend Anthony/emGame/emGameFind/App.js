<<<<<<< Updated upstream:frontend-mobile/frontend Anthony/emGame/emGameFind/App.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';


const navigation = createStackNavigator({
Home: HomeScreen,
Game: GameScreen
}, {
initialRouteName: 'Home', 
defaultNavigationOptions:{
  title: 'emGame Finder'
=======
import React, { Component } from 'react';
//import { Platform, StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './src/components/DrawerNavigator';

export default class App extends Component {
  render() {
    return (
      <DrawerNavigator />
    );
  }
>>>>>>> Stashed changes:App.js
}

<<<<<<< Updated upstream:frontend-mobile/frontend Anthony/emGame/emGameFind/App.js

export default createAppContainer(navigation); //created as we need to always display somethign to the screen and alwasy export some component
=======
>>>>>>> Stashed changes:App.js
