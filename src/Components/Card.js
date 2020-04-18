import React from 'react';
import {Text, TextInput, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import firebaseImpl from '../Configs/FireBase';
import { State } from 'react-native-gesture-handler';

function Logo() {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1511587477373-0e3e105ed675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
      }}
      style={styles.Image}
    />
  );
}

export default class Card extends React.Component {
  render() {
    return this.props.pass.map(element => {
      const Schedule = element.Day + element.Date + element.Hour;
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() => Alert.alert('Informações Detalhadas')}
        >
          <View style={styles.containerInf}>
            <Text style={styles.Title}>{Schedule}</Text>
            <Text>{element.Adress}</Text>
            <Text>{element.Price}</Text>
          </View>
          <Logo />
        </TouchableOpacity>
      );
    });
  };
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 22,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
    width: '90%',
    height: 130,
    backgroundColor: 'rgba(236, 236, 236, 1)',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerInf: {
    marginHorizontal: 15,
  },
  Image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 50,
  },
});
