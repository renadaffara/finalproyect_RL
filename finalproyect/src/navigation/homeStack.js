import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import Home from "../screens/home";
import Comments from "../screens/comments";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (

    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        />

      <Stack.Screen
        name="comments"
        component={Comments}
        />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },

});

export default HomeStack;  