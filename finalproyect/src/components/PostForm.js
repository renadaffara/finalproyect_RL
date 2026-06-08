import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

function PostForm(props) {
  const { description, setDescription, onSubmit, error } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> new post </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribí tu posteo"
        onChangeText={text => setDescription(text)}
        value={description}
      />

      <Pressable style={styles.button} onPress={() => onSubmit()}>
        <Text style={styles.buttonText}>Publicar</Text>
      </Pressable>

      {error !== "" ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },

  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16
  },

  button: {
    backgroundColor: "#000",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },

  error: {
    color: "red",
    marginTop: 15
  }
}); 

export default PostForm; 