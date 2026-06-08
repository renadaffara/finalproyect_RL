import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AuthStack from "./navigation/AuthStack.js";
export default function App() {
  return (
    <>
      <AuthStack />
      <StatusBar style="auto" />
    </>
  );
}