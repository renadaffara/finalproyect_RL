import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

import Login from "../screens/login";
import Register from "../screens/register";
import TabNavigator from "./tabNavigator";
import { auth } from "../firebase/config";

const Stack = createNativeStackNavigator();

function AuthStack() {
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [cargandoAutenticacion, setCargandoAutenticacion] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUsuarioActual(user);
      setCargandoAutenticacion(false);
    });
  }, []);

  return (
    <NavigationContainer>
      {!cargandoAutenticacion ? (
        <Stack.Navigator>
          {usuarioActual ? (
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      ) : (
        <Text>Cargando</Text>
      )}
    </NavigationContainer>
  );
}

export default AuthStack;