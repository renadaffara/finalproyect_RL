import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

function Loading(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="purple" />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
   justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 10,
    fontSize: 16
  }
});

export default Loading;
