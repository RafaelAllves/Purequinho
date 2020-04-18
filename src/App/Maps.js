import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import opencage from 'opencage-api-client';
import firebaseImpl from '../Configs/FireBase';
import * as firebase from 'firebase';


export default class Maps2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      number: '',
      Complement: '',
      address: 'roxo moreira',
      addressResult: '',
      geocoding: false,
      Aux: ', campinas',
    };
  }

  //bounds:{ -47.34558, -23.11763, -46.77704, -22.70526}
  reverseGeocode = () => {
    this.setState({address: this.state.street + ' , ' + this.state.number + this.state.Aux});
    const key = '9e549acc029c47299319f3d69de6cdf8';
    this.setState({geocoding: true});
    opencage
      .geocode({
        key,
        q: this.state.street + ' , ' + this.state.number + this.state.Aux,
      })
      .then(response => {
        var result = response.results[0];
        console.log(result.formatted);
        console.log(result.geometry);
        console.log(result.geometry.lat);
        this.setState({addressResult: result.formatted, geocoding: false});
      });
  };
  testFire() {
    firebase
      .firestore()
      .collection('users')
      .add({
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA',
      })
      .then(console.log('foi'))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <View style={styles.Container}>
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
          <TouchableOpacity
            style={styles.New}
            onPress={this.reverseGeocode}>
            <Text style={{textAlign:'center', color: 'white'}}>{this.state.geocoding ? "Buscando..." : "Buscar"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.New}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={{textAlign:'center', color: 'white'}}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.New}
            onPress={this.testFire}>
            <Text style={{textAlign:'center', color: 'white'}}>testFire</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.result}>{this.state.addressResult}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#1E88E5',
    width: 180,
    margin: 10,
  },
  result: {
    padding: 10,
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
  },
  ContainerStreetNumber: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  New: {
    height: 38,
    width: '45%',
    backgroundColor: '#1F8DCD',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
});


/*

<FormLabel style={{padding: 20}}>Enter Co-ordinates (latitude, longitude)</FormLabel>
        <FormInput 
          containerStyle={styles.textInput}
          onChangeText={(coords) => this.setState({coords})}
        />

<Button
  title="Buscar"
  loading={this.state.geocoding}
  buttonStyle={styles.button}
  title={this.state.geocoding ? "Buscando..." : "Buscar"}
  color='#FFFFFF'
  onPress={this.reverseGeocode}
/>

*/