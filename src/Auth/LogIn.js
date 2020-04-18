import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import * as firebase from 'firebase';
import PasswordReset from './PasswordReset';
export default class LogIn extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogIn = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({errorMessage: error.message}));
  };
  render() {
    return (
      <ImageBackground
        source={require('../Asserts/Imgs/back3.jpeg')}
        imageStyle={{opacity:0.3 }}
        style={{width: '100%', height: '102%'}}>
        <View style={styles.container}>
          <View style={styles.Logo}>
            <Image
              source={require('../Asserts/Imgs/logo.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          {this.state.errorMessage && (
            <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="  e-mail"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="  senha"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />

          <View style={styles.ConteinerButton}>
            <Button title="LogIn" onPress={this.handleLogIn} color="#1F8DCD" />
          </View>

          <View style={styles.forgotPasswordButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{textDecorationLine: 'underline'}}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 170}}>
            <PasswordReset />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 8,
    backgroundColor: '#ffffff',
    borderColor: '#CCC',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: '80%',
    maxWidth: 400,
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    color: '#000',
  },
  LogIButton: {
    alignItems: 'center',
    backgroundColor: '#1F8DCD',
    height: 40,
    width: 120,
    marginTop: 12,
  },
  LogIButtonText: {
    marginTop: 10,
    color: '#ffffff',
  },
  forgotPasswordButton: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 20,
    alignSelf: 'center',
    marginTop: 9,
  },
  ConteinerButton: {
    marginTop: 15,
    height: 40,
    width: 120,
  },
  Logo: {
    width: '30%',
    maxWidth: 130,
    height: '20%',
    minHeight: 130,
  },
});
