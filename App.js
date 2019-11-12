import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
  title: 'emGame Finder'
}
});


export default createAppContainer(navigation); //created as we need to always display somethign to the screen and alwasy export some component
