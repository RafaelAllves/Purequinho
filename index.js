/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Routs from './src/Configs/Routs';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';
import 'react-native-gesture-handler';


YellowBox.ignoreWarnings([
  'Warning:'
]);


AppRegistry.registerComponent(appName, () => Routs);
