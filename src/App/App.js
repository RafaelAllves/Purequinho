/*
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
importfirebaseImplfrom '../Utils/FireBase';

export default class App extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebaseImpl.auth();
    this.setState({currentUser});
  }
  handleLogOut = () => {
    firebaseImpl.auth().signOut();
  };

  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text> Ola {currentUser && currentUser.email}!</Text>
        <View style={styles.ConteinerButton}>
          <Button title="LogOut" onPress={this.handleLogOut} color="#66BBBB" />
        </View>
        <View style={styles.ConteinerButton}>
          <Button
            title="MenuTab"
            onPress={() => this.props.navigation.navigate('MenuTab')}
            color="#66BBBB"
          />
        </View>
        <View style={styles.ConteinerButton}>
          <Button
            title="Localization"
            onPress={() => this.props.navigation.navigate('Localization')}
            color="#66BBBB"
          />
        </View>
        <View style={styles.ConteinerButton}>
          <Button
            title="Maps2"
            onPress={() => this.props.navigation.navigate('Maps2')}
            color="#66BBBB"
          />
        </View>
        <View style={styles.ConteinerButton}>
          <Button
            title="Conf"
            onPress={() => this.props.navigation.navigate('Settings')}
            color="#66BBBB"
          />
        </View>
        <View style={styles.ConteinerButton}>
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('Home')}
            color="#66BBBB"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConteinerButton: {
    marginTop: 15,
  },
});
*/