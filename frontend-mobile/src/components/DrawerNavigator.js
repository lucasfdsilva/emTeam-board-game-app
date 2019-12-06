import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions  } from 'react-navigation-drawer';
import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import UserProfile from '../screens/UserProfile';
import GameScreen from '../screens/GameScreen';
import ChangePassword from '../screens/ChangePassword';
import FindScreen from '../screens/FindScreen';
import HostScreen from '../screens/HostScreen';
import ResorePassword from '../screens/RestorePassword';
import Signup from '../screens/Signup';
import MyGamesScreen from '../screens/MyGamesScreen';
import EventsScreen from '../screens/EventsScreen';
import EditProfile from  '../screens/EditProfile';


//const DrawerNavi = ({ navigation }) => {
const MyDrawerNavigator = createDrawerNavigator ({
    Stack: { screen: StackNavigator,
        drawerLabel: null,
    },
    Home: { screen: HomeScreen,
        drawerLabel: 'Dashboard',
    },
    Settings: { screen: SettingsScreen },
    Logout: { screen: Login,
        drawerLockMode: "locked-closed",
            disableGestures: true,
        
    },
    Profile: { screen: UserProfile },
    Game: { screen: GameScreen },
    ChangePW: { screen: ChangePassword, 
        drawerLabel: null,
    },
    FindGame: { screen: FindScreen },
    Host: { screen: HostScreen },
    RestorePW: { screen: ResorePassword,
        drawerLabel: null,
    
    },
    SignUp: { screen: Signup,
        navigationOptions: {
        drawerLockMode: "locked-closed",
        drawerLabel: null,
        disableGestures: true,
        }
    },
    Events: {screen: MyGamesScreen,
        drawerLabel: 'My Events',
    }, 
    Event: {screen: EventsScreen},

    EditProfile: {screen: EditProfile},

},

    {
        initialRouteName: 'Stack',
        drawerWidth: 300,
        drawerPosition: 'left',
    }
);
const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component {
    render() {
        return <AppContainer />;
    }
}
