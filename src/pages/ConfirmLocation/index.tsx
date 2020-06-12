import React, { useState, useEffect} from 'react';
import { 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  Platform,
  ScrollView, 
  Image, 
  Alert, 
  Button 
} from 'react-native';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import axios from 'axios';
import CleaningType from './CleaningType';

const ConfirmLocation = () => {
  const [position, setPosition] = useState<[number, number]>([-23.543845, -46.3007242])
  const [number, setNumber] = useState()
  const [street, setStreet] = useState()

  
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }
  function handleNavigateHome() {
    navigation.navigate('Home');
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          loadingEnabled= {true}
          scrollEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
          zoomEnabled={false}
          initialRegion={{
            latitude: -23.543845,
            longitude: -46.3007242,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,

          }}
          onDoublePress={e => setPosition([e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude])}
        >
          <Marker
            coordinate={{ 
              latitude: -23.543845,
              longitude: -46.3007242,
            }}
          />
            
        </MapView>
      </View>
      <View style={styles.containerInputComlement} >
        <TextInput
          autoCapitalize="none"
          style={styles.inputStreet}
          placeholder="Rua"
        />
        <TextInput
          autoCapitalize="none"
          style={styles.inputNumber}
          placeholder="Numero"
        />
      </View>
      <TextInput
        autoCapitalize="none"
        style={styles.inputComlement}
        placeholder="Complemento"
      />
      <CleaningType/>
      <RectButton style={styles.button} onPress={handleNavigateHome}>
        <Text style={styles.buttonText}>
          Confirmar Faxina
        </Text>
      </RectButton>
      <TouchableOpacity style={styles.back} onPress={handleNavigateBack}>
        <Text style={{textDecorationLine: 'underline'}}>voltar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  mapContainer: {
    width: '100%',
    height: '40%',
    borderRadius: 10,
    overflow: 'hidden',
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
  containerInputComlement: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  inputStreet: {
    width: '80%',
    backgroundColor: '#f8f8f8',
    height: 40,
    borderWidth: 0,
    borderRadius: 5,
    
  },

  inputNumber: {
    width: '15%',
    backgroundColor: '#f8f8f8',
    height: 40,
    borderWidth: 0,
    borderRadius: 5,
  },

  inputComlement: {
    borderWidth: 0,
    borderRadius: 5,
    height: 40,
    width: '90%',
    marginTop: 5,
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
    bottom: 40,
    justifyContent: 'center',
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
  },
  back: {
    position: 'absolute',
    bottom: 15,
  }

});

export default ConfirmLocation;