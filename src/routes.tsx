import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './pages/Home';
import Location from './pages/Location';
import ConfirmLocation from './pages/ConfirmLocation';
import Informations from './pages/Informations';

import Loading from './Auth/Loading';
import LogIn from './Auth/LogIn';
import PasswordReset from './Auth/PasswordReset';
import SignUp from './Auth/SignUp';
import firebase from 'firebase';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Profile= () => {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80'
      }}
      style={{width: 40, height: 40, borderRadius: 20}}
    />
  );
}

const Routes = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Loading" headerMode='none'>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="App" component={RouteDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const RouteDrawer = () => {
  const {currentUser} = firebase.auth();
  var user = firebase.auth().currentUser;
  var nameUser = '';
  if (user != null) {
    nameUser = `${user.displayName}`;
  }

  return (
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerType="front"
        drawerContentOptions={{
          activeTintColor: '#c6c6c6',
          itemStyle: {marginVertical: 10},
        }}
      >
        <Drawer.Screen
          name={nameUser}
          component={Home}//Perfil
          options={{
            drawerIcon: () => <Profile/>,
          }}
        />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Informations" component={Informations} />
        <Drawer.Screen name="Location" component={Location} />
        <Drawer.Screen name="ConfirmLocation" component={ConfirmLocation} />
      </Drawer.Navigator>
  );
}

export default Routes;

