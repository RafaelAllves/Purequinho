import React, { useState, useEffect } from 'react';
import {Text, TextInput, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import firebase from 'firebase';


// interface clear {
//   ano: string;
//   CEP: string;
//   Complemento: string;
//   Dia: string;
//   Faxineira: string;
//   Hora: string;
//   Mes: string;
//   Numero: string;
//   Preco: string;
//   Rua: string;
// }


const Card = () => {
    console.log('render');
    
    const [cleanings, setCleanings] = useState<any>([]);
    
    useEffect(()=>{
      const userID = firebase.auth().currentUser?.uid;
      let cleaning: any = [];
      firebase.firestore().collection("users").doc(userID).collection('FaxinasAgendadas').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          cleaning.push(doc.data());
          setCleanings([...cleaning]);
        });
      });
    }, [])
    
    return cleanings.map((element:any, index:any) => {
      const Schedule = element.Dia + ' ' + element.Mes + ' ' + element.Hora;
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() => Alert.alert('Informações Detalhadas')}
          key={index}
          >
          <View style={styles.containerInf}>
            <Text style={styles.Title}>{Schedule}</Text>
            <Text>{element.Rua + ', ' + element.Numero}</Text>
            <Text>{element.Preço}</Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1511587477373-0e3e105ed675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
            }}
            style={styles.Image}
            />
        </TouchableOpacity>
      );
    });
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 22,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
    width: '95%',
    height: 120,
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
    width: 70,
    height: 70,
    marginRight: 20,
    borderRadius: 50,
  },
});

export default Card;