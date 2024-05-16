/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

import { NativeModules } from 'react-native';
import app from './app/index.js'

if (__DEV__) {
  NativeModules.DevSettings.setHotLoadingEnabled(false);
}

// AppRegistry.registerComponent(appName, () => App);
