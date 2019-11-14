import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import Routes from './src/Routes';


const navigation = createStackNavigator({
Home: HomeScreen,
Game: GameScreen,
routes: Routes
}, {
initialRouteName: 'routes', 
defaultNavigationOptions:{
  title: 'emGame Finder',
  header: null, //this is to hide the navigation bar as it's partially blocking hte logo
}
});

export default createAppContainer(navigation); //created as we need to always display somethign to the screen and alwasy export some component
