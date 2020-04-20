import React from 'react';
import firebaseImpl from './FireBase';
import {StyleSheet, Text, View, Button, Image} from 'react-native';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LogIn from '../Auth/LogIn';
import Loading from '../Auth/Loading';
import PasswordReset from '../Auth/PasswordReset';
import SignUp from '../Auth/SignUp'

import HomeScreen from '../App/HomeScreen';
import InformationScreen from '../App/InformationScreen';
import ScheduleScreen from '../App/ScheduleScreen';
import Address from '../App/Address';
import Perfil from '../Components/Perfil';




export default class Routs extends React.Component {
  
  render() {
    const Stack = createStackNavigator();
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
    );
  }
}



function Logo() {
  return (
    <Image
      source={{
        uri:
          'https://firebasestorage.googleapis.com/v0/b/app01-01.appspot.com/o/purple.png?alt=media&token=e2368344-dcb6-4fa3-bab1-f1b63446e36d'
      }}
      style={{width: 30, height: 30}}
    />
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer(pass) {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Schedule"
      drawerType="front"
      drawerContentOptions={{
        activeTintColor: '#c6c6c6',
        itemStyle: {marginVertical: 10},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name={pass.pass}
        component={Perfil}
        options={{
          drawerIcon: () => <Logo />,
        }}
      />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Information" component={InformationScreen} />
      <Drawer.Screen name="Schedule" component={ScheduleScreen} />
      <Drawer.Screen name="Address" component={Address} />
    </Drawer.Navigator>
  );
}

class RouteDrawer extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebaseImpl.auth();
    this.setState({currentUser});
  }
  render() {
    var user = firebaseImpl.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    const userId = firebaseImpl.auth().currentUser.uid;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      //firebaseImpl.firestore().collection('users').doc(userId).get().then(function(doc){photoUrl = doc.Photo})
      emailVerified = user.emailVerified;
      uid = user.uid;
    }


    const {currentUser} = this.state;
    return (
      <MyDrawer pass={name} />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    margin: 15,
  },
});