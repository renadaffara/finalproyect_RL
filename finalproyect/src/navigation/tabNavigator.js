import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home.js";
import Profile from "../screens/profile.js";
import NewPost from "../screens/createPost.js";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <View style={styles.container}>

            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" /> }}
                />
                <Tab.Screen
                    name="CreatePost"
                    component={NewPost}
                    options={{ tabBarIcon: () => <Entypo name="circle-with-plus" size={24} color="black" /> }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{ tabBarIcon: () => <AntDesign name="user" size={24} color="black" /> }}
                />

            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },

});

export default TabNavigator;