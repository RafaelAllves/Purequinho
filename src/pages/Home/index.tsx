import React, {useState, useEffect} from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';


const Home = () => {
  const navigation = useNavigation();

  function handlerNavigateToLocation() {
    navigation.navigate('Location');
  }



  return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: '30%', height: '20%'}}
        />
        <View style={{width: '80%', height: 1, backgroundColor: '#c6c6c6'}}></View>
        <ScrollView style={{width: '100%'}}>
          <View style={{alignItems:'center', paddingBottom: 10,}}>
          <Card />
          </View>
        </ScrollView>
        <View style={{width: '80%', height: 1, backgroundColor: '#c6c6c6'}}></View>
        <RectButton style={styles.button} onPress={handlerNavigateToLocation}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Agendar Faxina
          </Text>
        </RectButton>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 12,
    paddingTop: 30,
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#1F8DCD',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  }
});

export default Home;