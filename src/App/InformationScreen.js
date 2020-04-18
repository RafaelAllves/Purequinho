import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image, ImageBackground, TouchableOpacity} from 'react-native';
import DrawerButton from '../Components/DrawerButton';

export default function Information(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DrawerButton props={props}/>
        <View style={styles.Image}>
          <Image
            source={require('../Asserts/Imgs/commitment.png')}
            style={{width: '40%', height: '100%'}}
          />
        </View>
        <Text style={styles.Title}>A MOTIVAÇÃO INICIAL</Text>
        <Text style={styles.Text}>
          O projeto se desenvolve na cidade de Campinas, mais especificamente no
          bairro do Campo dos Amarais, que abrange as comunidades: Vila
          Esperança, Santa Mônica e São Marcos. Entre visitas a essas
          comunidades, localizadas a cerca de 9km da Cidade Universitáriade de
          Campinas, indetificamos uma grande incidência de desemprego entre
          mulheres em oposição a uma grande experiência com serviços de limpeza.
        </Text>
        <View style={styles.Image}>
          <Image
            source={require('../Asserts/Imgs/ideia.png')}
            style={{width: '40%', height: '100%'}}
          />
        </View>
        <Text style={styles.Title}>A IDEIA</Text>
        <Text style={styles.Text}>
          Nossa ideia consiste em criar um aplicativo que conecta as mulheres do
          Campo dos Amarais com os moradores de Barão Geraldo, principalmente os
          Universitários, que necessitam de serviços de limpeza. No futuro as
          mulheres serão proprietarias desse aplicativo, e para isso aprenderão
          conceitos de gestão e administração. Dessa forma alcançaremos nossos
          dois objetivos: melhoras a vida dessas mulheres através do aumento na
          renda e empoderá-las através de capacitações e treinamentos de gestão,
          com aumento de sua autoestima e autoconfiança.
        </Text>
        <View style={styles.Image}>
          <Image
            source={require('../Asserts/Imgs/difference.png')}
            style={{width: '37.5%', height: '100%'}}
          />
        </View>
        <Text style={styles.Title}>O DIFERENCIAL</Text>
        <Text style={styles.Text}>
          O fator social -> as mulheres serão empoderadoras e donas do próprio
          negócio. Objetivamos assim, diminuir a dependência dessas mulheres dos
          seus respectivos maridos e/ou outros membros da familia.
        </Text>
        <Text style={styles.Text}>
          A praticidade -> agendar uma limpeza nunca foi tão prático e fácil.
          Com apenas alguns cliques no aplicativo você poderá contratar o
          serviço para sua casa.
        </Text>
        <Text style={styles.Text}>
          A qualidade -> oferecemos um serviço de alta qualidade, padronizado e
          com um preço justo, tanto para os estudantes como para as mulheres.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around'
  },
  Button: {
    margin: 15,
  },
  Title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 15,
  },
  Text: {
    fontSize: 16,
    marginHorizontal: 30,
    marginVertical: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(31, 141, 205, 0.25)',
    borderRadius: 10,
    padding: 10,
  },
  Image: {
    marginVertical: 30,
    alignItems: 'center',
    //backgroundColor: 'red',
    height: '10%',
    minHeight: 50,
    width: '100%',
    maxWidth: 400,
  },
  Drawer: {
    margin: 15,
    position: 'absolute',
    top: 10,
    left: 0,
    height: 30,
    width: 30,
  },
});

/*

<ImageBackground
      source={require('../Asserts/Imgs/textura.jpg')}
      imageStyle={{opacity:0.3 }}
      style={{width: '100%', height: '102%'}}>
</ImageBackground>

<Text>
        O projeto Pureco é um dos projetos do time Enactus Unicamp - Campinas e
        visa empoderar mulheres através do desenvolvimento de um aplicativo para
        celulares que funcione como uma plataforma de contratação de serviços de
        limpeza, conectando os estudantes da Cidade Universitária de Campinas
        com as colaboradoras do Campo dos Amarais, comunidade na periferia da
        região Norte de Campinas. O projeto idealiza o fortalecimento de
        iniciativas empreendedoras, através da formação de uma grupo de
        faxineiras que busque atender principalmente à demanda da população
        estudantil de Barão Geraldo, distrito de Campinas-SP.
      </Text>
*/