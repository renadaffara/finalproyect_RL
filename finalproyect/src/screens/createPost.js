import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";

function NewPost(props) {

  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function addPost() {

    if (description === "") {

      setError("La descripción no puede estar vacía");
      return;

    }

    db.collection("posts")
      .add({
        owner: auth.currentUser.email,
        description: description,
        likes: [],
        createdAt: Date.now()
      })
      .then(() => {

        setDescription("");
        setError("");

        props.navigation.navigate("Home");

      })
      .catch(() => {

        setError("No se pudo crear el posteo");

      });

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Nuevo posteo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribí tu posteo"
        onChangeText={text => setDescription(text)}
        value={description}
      />

      <Pressable
        style={styles.button}
        onPress={() => addPost()}
      >
        <Text style={styles.buttonText}>
          Publicar
        </Text>
      </Pressable>

      {
        error !== ""
        ?
        <Text style={styles.error}>
          {error}
        </Text>
        :
        null
      }

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
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

export default NewPost;