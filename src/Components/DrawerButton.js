import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function DrawerButton(props) {
  return (
    <TouchableOpacity
        style={styles.Drawer}
        onPress={() => props.props.navigation.openDrawer()}>
        <Image
          source={require('../Asserts/Imgs/list.png')}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
  )

}
const styles = StyleSheet.create({
  Drawer: {
    margin: 15,
    position: 'absolute',
    top: 10,
    left: 0,
    height: 30,
    width: 30,
  },
});
