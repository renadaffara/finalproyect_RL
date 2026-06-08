import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AuthStack from './src/navigation/authStack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <AuthStack />
      <StatusBar style="auto" />
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  
});
