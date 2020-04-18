import React from 'react';
import {StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import Card from '../Components/Card';
import firebaseImpl from '../Configs/FireBase';
import * as firebase from 'firebase';

function testFire(list) {
  list.push({
    Hour: '15:10 ',
    Date: '26 Abr ',
    Day: 'Seg ',
    Adress: 'Rua Roxo Moreira, 797',
    Price: 'R$ 80,00',
    UrlPhoto: 'https://images.unsplash.com/photo-1511587477373-0e3e105ed675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
  });
  return list;
}

export default function HomeScreen(props) {
  const List = [
    {
      Hour: '15:10 ',
      Date: '26 Abr ',
      Day: 'Seg ',
      Adress: 'Rua Roxo Moreira, 797',
      Price: 'R$ 80,00',
      UrlPhoto: 'https://images.unsplash.com/photo-1511587477373-0e3e105ed675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
      Hour: '16:10 ',
      Date: '26 Abr ',
      Day: 'Seg ',
      Adress: 'Rua Roxo Moreira, 797',
      Price: 'R$ 80,00',
      UrlPhoto: 'https://images.unsplash.com/photo-1511587477373-0e3e105ed675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
      Hour: '15:10 ',
      Date: '26 Abr ',
      Day: 'Seg ',
      Adress: 'Rua Roxo Moreira, 797',
      Price: 'R$ 80,00',
      UrlPhoto: 'https://images.unsplash.com/photo-1511587477373-0e3e105ed675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Gaveta}
        onPress={() => props.navigation.openDrawer()}>
        <Image
          source={require('../Asserts/Imgs/list.png')}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
      <Image
        source={require('../Asserts/Imgs/logo.png')}
        style={{width: '30%', height: '20%', top: 15, marginBottom: 20}}
      />
      <View style={{width: '80%', height: 1, backgroundColor: '#c6c6c6'}}></View>
      <ScrollView style={styles.Scroll}>
        <View style={{alignItems:'center', paddingBottom: 10,}}>
          <Card pass={List} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.New} onPress={testFire(List)}>
        <Text style={{textAlign:'center', color: 'white'}}>testFire</Text>
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
  Gaveta: {
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
