import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from './Loading';
import SignUp from './SignUp';
import LogIn from './LogIn';
import PasswordReset from './PasswordReset';
import Home from '../pages/Home';

class Rotas extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          headerMode="none"
          screenOptions={{
            animationEnabled: true,
            animationTypeForReplace: 'pop',
            gestureDirection: 'horizontal',
          }}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/*
const auth = createCompatNavigatorFactory(createSwitchNavigator)(
  {
    Loading,
    SignUp,
    LogIn,
    PasswordReset,
    MenuTab,
    App,
    Exemple,
  },
  {
    initialRouteName: 'Loading',
  },
);

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainDrawer = createDrawerNavigator(
  {
    Rotas: {
      screen: Exemple,
    },
    Homes: Home,
    Maps: Maps2,
    Settings: Settings,
  },
  {
    drawerWidth: '80%',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      items: Localization,
      activeTintColor: 'red',
      activeBackgroundColor: '#c6c6c6',
      itemsContainerStyle: {
        marginVertical: 0,
      },
    },
  },
);
const Index = createSwitchNavigator(
  {
    auth,
    MainDrawer,
  },
  {
    initialRouteName: 'auth',
  },
);

*/
export default Rotas;
