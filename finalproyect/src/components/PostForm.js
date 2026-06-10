import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

function PostForm(props) {
  const { description, setDescription, onSubmit, error } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevo posteo</Text>

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
    width: "100%"
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16
  },
  error: {
    color: "red",
    marginTop: 10
  }
});

export default PostForm;