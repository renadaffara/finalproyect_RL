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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  text: {
    marginTop: 15,
    fontSize: 16,
    color: "#555"
  }
});

export default Loading;
