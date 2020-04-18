import React from 'react';
import {Text, TextInput, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import firebaseImpl from '../Configs/FireBase';

export default class Adress extends React.Component {
  handleLogOut = () => {
    firebaseImpl.auth().signOut();
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
      <View style={styles.Container}>
        <View style={styles.ContainerTextImput}>
          <View style={styles.ContainerStreetNumber}>
            <TextInput style={styles.TextInputStreet} placeholder="Rua" />
            <TextInput style={styles.TextInputNumber} placeholder="Nº" />
          </View>
          <TextInput style={styles.TextInputComplement} placeholder="Complemento" />
        </View>
        <TouchableOpacity
          style={styles.New}
          onPress={this.handleLogOut}>
          <Text style={{textAlign:'center', color: 'white'}}></Text>
        </TouchableOpacity>
        <View style={styles.ContainerButtomLogOut}>
          <Button color="#1F8DCD" title="LogOut" onPress={this.handleLogOut} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
    backgroundColor: 'green',
  },
  ContainerStreetNumber: {
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
