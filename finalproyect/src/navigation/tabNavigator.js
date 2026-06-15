import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../screens/homeStack.js";
import Profile from "../screens/profile.js";
import NewPost from "../screens/createPost.js";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />
        }}
      />

      <Tab.Screen
        name="CreatePost"
        component={NewPost}
        options={{
          tabBarIcon: () => <Entypo name="circle-with-plus" size={24} color="black" />
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;