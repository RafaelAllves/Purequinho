import React, { useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text,ScrollView, Image, Alert, Button } from 'react-native';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import axios from 'axios';

interface Params {
  uf: string;
  city: string;
}




const Points = () => {
  const [position, setPosition] = useState<[number, number]>([-23.543845, -46.3007242])
  const [number, setNumber] = useState()
  const [street, setStreet] = useState()

  
  const navigation = useNavigation();
  
  // useEffect(() => {
  //   axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position[0]},${position[1]}&key=9e549acc029c47299319f3d69de6cdf8&pretty=1`).then(response => {
  //     let adress = response.data.results[0].components.road;
  //     setStreet(adress);
  //     adress = response.data.results[0].components.house_number;
  //     setNumber(adress);
  //     console.log(street, number)
  //   });
  // }, [setPosition]);


  // useEffect(() => {
  //   async function loadPosition() {
  //     const { status} = await Location.requestPermissionsAsync();

  //     if(status !== 'granted') {
  //       Alert.alert('Oooops', 'Precisamos de sua permissão para obter a locatlização');
  //       return;
  //     }

  //     const location = await Location.getCurrentPositionAsync();
  //     const { latitude, longitude} = location.coords;

  //     setPosition([
  //       latitude,
  //       longitude,
  //     ])
  //   };

  //   loadPosition();
  // }, [])




  function handleNavigateBack() {
    navigation.goBack();
  }

  function handlerNavigateToConfirmLocation() {
    navigation.navigate('ConfirmLocation');
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#1F8DCD" />
        </TouchableOpacity>
        

        <View style={styles.mapContainer}>
          <MapView 
            style={styles.map}
            loadingEnabled= {true}
            initialRegion={{
              latitude: position[0],
              longitude: position[1],
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,

            }}
            onRegionChange={e => setPosition([e.latitude, e.longitude])}
          >
            <Marker
              coordinate={{ latitude: position[0], longitude: position[1]}}
            />
              
          </MapView>
          <TextInput
            autoCapitalize="none"
            style={styles.inputAdress}
            placeholder="Endereço"
          />
          <RectButton style={styles.button} onPress={handlerNavigateToConfirmLocation}>
            <Text style={styles.buttonText}>
              Selecionar Local
            </Text>
          </RectButton>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20 + Constants.statusBarHeight,
  },


  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    alignItems: 'center',
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80, 
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#34CB79',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center'
  },
  inputAdress: {
    borderColor: '#002233',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '90%',
    marginTop: 15,
    position: 'absolute',
    top: 0,
    backgroundColor: '#f8f8f8',
    opacity: 0.95,
  },
  button: {
    backgroundColor: '#1F8DCD',
    width: '50%',
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
  }

});

export default Points;