import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AuthStack from './src/navigation/authStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <AuthStack />
      <StatusBar style="auto" />
    </NavigationContainer>
    </>
  );
}