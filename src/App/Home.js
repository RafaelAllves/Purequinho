/* eslint-disable react-native/no-inline-styles */
/*
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import firebaseImpl from '../Configs/FireBase';
import Perfil from './Perfil';
import Maps2 from './Maps';
import HomeScreen from './HomeScreen';
import Information from './Information';
import Adress from './Address';

function Logo() {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80s'      }}
      style={{width: 40, height: 40, borderRadius: 50,}}
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
      initialRouteName="HomeScreen"
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
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Information" component={Information} />
      <Drawer.Screen name="Maps" component={Maps2} />
      <Drawer.Screen name="Adress" component={Adress} />
    </Drawer.Navigator>
  );
}


//export default function Home() {


export default class Home extends React.Component {
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
    return <MyDrawer pass={name} />;
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
*/