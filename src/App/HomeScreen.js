import React from 'react';
import {StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Card from '../Components/Card';
import DrawerButton from '../Components/DrawerButton';
import firebaseImpl from '../Configs/FireBase';
import * as firebase from 'firebase';

function test(){
  const userID = firebaseImpl.auth().currentUser.uid;
  const ref = firebaseImpl.firestore().collection('users').doc(userID);
  ref.collection('FaxinasAgendadas').add({
    Dia: '17',
    Mes: 'Mar',
    Ano: '2020',
    Hora: '15:00',
    CEP: '13083590',
    Rua: 'Roxo Moreira',
    Numero: '797',
    Complemento: 'Apto 05',
    Preço: 'R$ 80,00',
    Faxineira: 'Hinata',
  })
}


export default function HomeScreen(props) {

  return (
    <View style={styles.container}>
      <DrawerButton props={props}/>
      <Image
        source={require('../Asserts/Imgs/logo.png')}
        style={{width: '30%', height: '20%', top: 15, marginBottom: 20}}
      />
      <View style={{width: '80%', height: 1, backgroundColor: '#c6c6c6'}}></View>
      <ScrollView style={styles.Scroll}>
        <View style={{alignItems:'center', paddingBottom: 10,}}>
          <Card />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.New} onPress={test}>
        <Text style={{textAlign:'center', color: 'white'}}>test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Drawer: {
    margin: 15,
    position: 'absolute',
    top: 10,
    left: 0,
    height: 30,
    width: 30,
  },
  New: {
    height: 38,
    width: '45%',
    marginTop: 9,
    backgroundColor: '#1F8DCD',
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
  },
  Scroll: {
    marginBottom: 65,
    width: '100%',
  },
});
