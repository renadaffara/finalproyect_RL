import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import Register from "../screens/register";
import NavegacionTab from "./NavegacionTab";

const Stack = createNativeStackNavigator();

function tabNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
        />  

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="NavegacionTab"
          component={NavegacionTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default tabNavigatior