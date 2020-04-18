import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, PermissionsAndroid, Button } from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoicmFmYWVsYWxsdmVzOTEiLCJhIjoiY2s4cTR2cmtlMDA3aDNmcGQ5aW83dm1vdiJ9.1r1GScZPwao-4uEx-uJSoA');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 40,
  },
});

export default function Localization() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [userPosition, setUserPosition] = useState(false);

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        setHasLocationPermission(true);
      } else {
        console.error('permissão negada');
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    verifyLocationPermission();

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
      );
    }
  }, [hasLocationPermission]);

  return (
    /*<View style={styles.container}>
      <Text>Latitude: {userPosition.latitude}</Text>
      <Text>Longitude: {userPosition.longitude}</Text>
    </View>
    */
    <MapboxGL.MapView style={{ flex: 1 }} styleURL={MapboxGL.StyleURL.Light}>
      <MapboxGL.Camera
        centerCoordinate={[-48.46800, -1.43630]}
        zoomLevel={15}
      />
      <MapboxGL.PointAnnotation
        id="first-annotation"
        coordinate={[-48.46800, -1.43630]}
      />
    </MapboxGL.MapView>
  );
}

//  [-48.46800, -1.43630]