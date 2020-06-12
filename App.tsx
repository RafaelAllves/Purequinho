import React from 'react';
import Routes from './src/routes'
import { StatusBar } from 'react-native';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }



export default function App() {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes/>
    </>
  );
}