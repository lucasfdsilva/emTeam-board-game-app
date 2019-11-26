import React, { Component } from 'react';
import {Platform, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen';


const MyDrawerNavigator = createDrawerNavigator({
    Home: { screen:  StackNavigator},
    Settings: {screen: SettingsScreen}, 

     
}, 
{
    initialRouteName:'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
}
);
const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component{
render(){
    return<AppContainer/>;
}
}
