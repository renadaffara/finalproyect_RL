import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";

function Register(props) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [registerError, setRegisterError] = useState("");

  function register(email, pass) {

    if (email === "" || pass === "" || username === "") {
      setRegisterError("Todos los campos son obligatorios");
      return;
    }

    auth.createUserWithEmailAndPassword(email, pass)
      .then(() => {

        db.collection("users")
          .add({
            username: username,
            email: email
          })
          .then(() => {
            props.navigation.navigate("Login");
          })
          .catch(() => {
            setRegisterError("Fallo al guardar los datos del usuario.");
          });

      })
      .catch(() => {
        setRegisterError("Fallo en el registro.");
      });

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Registro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={text => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={text => setPass(text)}
        value={pass}
      />

      <Pressable
        style={styles.button}
        onPress={() => register(email, pass)}
      >
        <Text style={styles.buttonText}>
          Registrarse
        </Text>
      </Pressable>

      {
        registerError !== ""
        ?
        <Text style={styles.error}>
          {registerError}
        </Text>
        :
        null
      }

      <Pressable
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.link}>
          ¿Ya tenés cuenta? Iniciá sesión
        </Text>
      </Pressable>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 30,
    marginBottom: 20
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
    alignItems: "center",
    width: "100%"
  },

  buttonText: {
    fontSize: 16
  },

  error: {
    color: "red",
    marginTop: 10
  },

  link: {
    marginTop: 20
  }

});

export default Register;