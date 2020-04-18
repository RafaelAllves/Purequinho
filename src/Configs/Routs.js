import React from 'react';
import {View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';

import LogIn from '../Auth/LogIn';
import Loading from '../Auth/Loading';
import PasswordReset from '../Auth/PasswordReset';
import SignUp from '../Auth/SignUp'

import HomeScreen from '../App/HomeScreen';
import InformationScreen from '../App/InformationScreen';
import MapScreen from '../App/Maps';
import Address from '../App/Address';




const AuthStack = createStackNavigator({
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      headerShown: false,
    }
  },
  Loading: {
    screen: Loading,
    navigationOptions: {
      headerShown: false,
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    }
  },
  PasswordReset: {
    screen: PasswordReset,
    navigationOptions: {
      headerShown: false,
    }
  },

});



const AppStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Address: {
    screen: Address,
    navigationOptions: {
      headerShown: false,
    },
  },
  Information: {
    screen: InformationScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  ),
);
