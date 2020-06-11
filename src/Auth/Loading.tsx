import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

const Loading = () => {
  const navigation = useNavigation();
  firebase.auth().onAuthStateChanged(user => {
    navigation.navigate(user ? 'App' : 'SignUp');
  });
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;