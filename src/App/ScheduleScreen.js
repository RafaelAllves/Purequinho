import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, Platform} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import opencage from 'opencage-api-client';
import firebaseImpl from '../Configs/FireBase';
import Picker from '../Components/Picker';



export default class ScheduleScreen extends React.Component {
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
      RegisteredStreet: '',
      RegisteredNumber: '',
      RegisteredComplement: '',
      ScheduleMonth: '', //listDate[1]
      ScheduleDay: '', //listDate[2]
      ScheduleYear: '', //listDate[3]
      ScheduleHour: '', //listDate[4]
    };

    this.setFunction = this.setFunction.bind(this);
    
    
    
    const userID = firebaseImpl.auth().currentUser.uid;
    
    firebaseImpl.firestore().collection('users').doc(userID).get().then(
      doc => (
        this.setState({
          RegisteredStreet: doc.data().Rua,
          RegisteredNumber: doc.data().Numero,
          RegisteredComplement: doc.data().Complemento,
        })
        )
        )
  }
      
      
      
      
  setFunction(key, Value,) {
    this.setState({
      [key]: `${Value}`,
    });
  }
  
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
  
  
  NewCleaning = () => {
    const userID = firebaseImpl.auth().currentUser.uid;
    const ref = firebaseImpl.firestore().collection('users').doc(userID);
    ref.collection('FaxinasAgendadas').add({
      Dia: this.state.ScheduleDay,
      Mes: this.state.ScheduleMonth,
      Ano: this.state.ScheduleYear,
      Hora: this.state.ScheduleHour,
      CEP: '13083590',
      Rua: 'Roxo Moreira',
      Numero: '797',
      Complemento: 'Apto 05',
      Preço: 'R$ 80,00',
      Faxineira: 'Hinata',
    })
  };
  
  render() {

    return (
      <View style={styles.Container}>
        <View style={styles.ContainerImput}>
          <View style={styles.ContainerStreetNumber}>
            <TextInput
              autoCapitalize= "sentences"
              autoCompleteType= 'street-address'
              defaultValue= {this.state.RegisteredStreet}
              editable = {true}
              style={styles.TextInputStreet}
              placeholder="Rua"
              onChangeText={street => this.setState({street})}
            />
            <TextInput
              autoCapitalize="none"
              defaultValue= {this.state.RegisteredNumber}
              style={styles.TextInputNumber}
              placeholder="Nº"
              onChangeText={number => this.setState({number})}
            />
          </View>
          <TextInput
            autoCapitalize="none"
            defaultValue= {this.state.RegisteredComplement}
            style={styles.TextInputComplement}
            placeholder="Complemento"
            onChangeText={complemet => this.setState({complemet})}
          />
        </View>

        <Picker setFunction={this.setFunction}/>


          <TouchableOpacity
            style={styles.Button}
            onPress={this.reverseGeocode}>
            <Text style={{textAlign:'center', color: 'white'}}>{this.state.geocoding ? "Buscando..." : "Buscar"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{textAlign:'center', color: 'white'}}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={this.NewCleaning}>
            <Text style={{textAlign:'center', color: 'white'}}>pick</Text>
          </TouchableOpacity>
        <Text style={styles.result}>{this.state.addressResult}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  ContainerImput: {
    alignItems: 'center',
    backgroundColor: 'red',
    marginHorizontal: 20,
    width: '85%',
  },
  
  ContainerStreetNumber: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
    width: '100%',
  },
  TextInputStreet: {
    borderColor: '#002233',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '70%',
    opacity: 0.8,
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
    width: '100%',
    opacity: 0.8,
    marginTop: 15,
    backgroundColor: 'green'
  },
  Button: {
    height: 38,
    width: '45%',
    backgroundColor: '#1F8DCD',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  result: {
    padding: 10,
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