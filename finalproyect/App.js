import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthStack from "./navigation/authStack"; 
export default function App() {

  return (
    <>
      <AuthStack />
      <StatusBar style="auto" />
    </>
  );
}; 

