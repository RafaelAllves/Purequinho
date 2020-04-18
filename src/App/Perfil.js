import React from 'react';
import {Text, TextInput, View, StyleSheet, Image, Button} from 'react-native';
import firebaseImpl from '../Configs/FireBase';

export default class Perfil extends React.Component {
  handleLogOut = () => {
    firebaseImpl.firestore().collection('users').add({
      value: 10,
      Date: 50,
    });

  };
  render() {
    var user = firebaseImpl.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    }
    return (
      <View>
        <View>
          <Text style={styles.Title}>Perfil</Text>
        </View>
        <View style={styles.ContainerTextInput}>
          <Text style={styles.LabelTextInput}>nome</Text>
          <TextInput
            style={styles.TextInputComplement}
            placeholder={name}
          />
        </View>
        <View style={styles.ContainerTextInput}>
          <Text style={styles.LabelTextInputBirthday}>data de nascimento</Text>
          <View style={styles.ContainerStreetNumber}>
            <TextInput style={styles.TextInputBoxBirthday} placeholder="01" />
            <TextInput style={styles.TextInputBoxBirthday} placeholder="12" />
            <TextInput style={styles.TextInputBoxBirthday} placeholder="1999" />
          </View>
        </View>
        <View style={styles.ContainerTextImput}>
          <View style={styles.ContainerStreetNumber}>
            <TextInput
              autoCapitalize="none"
              style={styles.TextInputStreet}
              placeholder="Rua"
              onChangeText={street => this.setState({street})}
            />
            <TextInput
              autoCapitalize="none"
              style={styles.TextInputNumber}
              placeholder="Nº"
              onChangeText={number => this.setState({number})}
            />
          </View>
          <TextInput
            autoCapitalize="none"
            style={styles.TextInputComplement}
            placeholder="Complemento"
            onChangeText={complemet => this.setState({complemet})}
          />
        </View>
        <View style={styles.ContainerButtomLogOut}>
          <Button color="#1F8DCD" title="LogOut" onPress={this.handleLogOut} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: 'bold',
    color: '#1F8DCD',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 3,
  },
  Subtitle: {
    fontSize: 14,
    fontFamily: 'lato',
    color: '#116666',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.85,
    marginLeft: 32,
    marginTop: 32,
    marginBottom: 3,
  },
  LabelTextInput: {
    fontSize: 12,
    fontFamily: 'lato',
    color: '#445562',
    left: -148,
    opacity: 0.85,
    marginLeft: 32,
    marginTop: 16,
    marginBottom: 4,
  },
  TextInputBox: {
    borderColor: '#002233',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 296,
    opacity: 0.8,
  },
  LabelTextInputBirthday: {
    fontSize: 12,
    fontFamily: 'lato',
    color: '#445562',
    left: -110,
    opacity: 0.85,
    marginLeft: 32,
    marginTop: 16,
    marginBottom: 4,
  },
  TextInputBoxBirthday: {
    borderColor: '#002233',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginHorizontal: 13,
    marginTop: 4,
    width: 80,
    opacity: 0.8,
  },
  ContainerTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerTextInputBirthday: {
    display: 'flex',
    flexDirection: 'row',
  },
  ContainerButtomLogOut: {
    marginTop: 50,
  },
  textInput: {
    marginTop: 8,
    backgroundColor: '#ffffff',
    borderColor: '#CCC',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: '60%',
    opacity: 0.8,
  },
  TextInputStreet: {
    borderColor: '#002233',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '60%',
    opacity: 0.8,
    marginRight: '5%',
  },
  TextInputNumber: {
    borderColor: '#002233',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '15%',
    opacity: 0.8,
  },
  TextInputComplement: {
    borderColor: '#002233',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '80%',
    opacity: 0.8,
    marginTop: 15,
  },
  ContainerTextImput: {
    alignItems: 'center',
  },
  ContainerStreetNumber: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
