import React, {useState} from 'react';
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
import firebase from '../services/FireBase';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     password: '',
  //     repassword: '',
  //     errorMessage: null,
  //   };
  // }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const navigation = useNavigation();


  
  function handleSignUp() {
    const navigation = useNavigation();

    if (password == repassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function() {
          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: name,
            })
            .then(function() {
              const userID = firebase.auth().currentUser.uid;
              const user = firebase.auth().currentUser;
              firebase
                .firestore()
                .collection('users')
                .doc(userID)
                .set({
                  name: `${user.displayName}`,
                });
            })
            .then(function() {
              () => navigation.navigate('App');
            });
        })
        .catch((error: { message: React.SetStateAction<string>; }) => setErrorMessage(error.message));
    } else {
      setErrorMessage('As senhas devem ser iguais');
    }
  };
    return (
      <ImageBackground
        source={require('../assets/back3.jpeg')}
        imageStyle={{opacity:0.3 }}
        style={{width: '100%', height: '102%'}}>
        <View style={styles.container}>
          <View style={styles.Logo}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          {errorMessage && (
            <Text style={{color: 'red'}}>{errorMessage}</Text>
          )}
          <TextInput
            placeholder="  nome"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={name => setName(name)}
            value={name}
          />
          <TextInput
            placeholder="  e-mail"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInput
            secureTextEntry
            placeholder="  senha"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={value => setPassword(value)}
            value={password}
          />
          <TextInput
            secureTextEntry
            placeholder="  confimar senha"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={value => setRepassword(value)}
            value={repassword}
          />

          <View style={styles.ConteinerButton}>
            <Button
              title="Cadraste"
              onPress={handleSignUp}
              color="#1F8DCD"
            />
          </View>

          <View style={styles.LogInButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LogIn')}>
              <Text>Faça Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
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


export default SignUp;