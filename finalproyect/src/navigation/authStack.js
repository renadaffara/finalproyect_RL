import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import Register from "../screens/register";
import TabNavigator from "./tabNavigator";
import { View } from "react-native-web";

const Stack = createNativeStackNavigator();

function AuthStack() {

    return (

        <View>

            <Stack.Navigator>

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

                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </View>


    )
}

export default AuthStack;