import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import firebaseImpl from '../Configs/FireBase';
import * as firebase from 'firebase';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repassword: '',
      errorMessage: null,
    };
  }
  handleSignUp = () => {
    const {email, password, name} = this.state;
    if (this.state.password == this.state.repassword) {
      firebaseImpl
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function() {
          firebaseImpl
            .auth()
            .currentUser.updateProfile({
              displayName: name,
            })
            .then(function() {
              const userID = firebaseImpl.auth().currentUser.uid;
              const user = firebaseImpl.auth().currentUser;
              firebaseImpl
                .firestore()
                .collection('users')
                .doc(userID)
                .set({
                  name: `${user.displayName}`,
                });
            })
            .then(function() {
              () => this.props.navigation.navigate('App');
            });
        })
        .catch(error => this.setState({errorMessage: error.message}));
    } else {
      this.setState({errorMessage: 'As senhas devem ser iguais'});
    }
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
            placeholder="  nome"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            placeholder="  e-mail"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="  senha"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <TextInput
            secureTextEntry
            placeholder="  confimar senha"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={repassword => this.setState({repassword})}
            value={this.state.repassword}
          />

          <View style={styles.ConteinerButton}>
            <Button
              title="Cadraste"
              onPress={this.handleSignUp}
              color="#1F8DCD"
            />
          </View>

          <View style={styles.LogInButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LogIn')}>
              <Text>Faça Login</Text>
            </TouchableOpacity>
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
  ConteinerButton: {
    marginTop: 15,
    height: 40,
    width: 120,
  },
  title: {
    fontSize: 24,
    color: '#116666',
  },
  SingUpButton: {
    alignItems: 'center',
    backgroundColor: '#1F8DCD',
    height: 40,
    width: 120,
    marginTop: 12,
  },
  SingUpButtonText: {
    marginTop: 10,
    color: '#ffffff',
  },
  LogInButton: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 20,
    alignSelf: 'center',
    marginTop: 9,
  },
  Logo: {
    width: '30%',
    maxWidth: 130,
    height: '20%',
    minHeight: 130,
  },
});
