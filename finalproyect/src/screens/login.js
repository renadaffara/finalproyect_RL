import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { auth } from "../firebase/config";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginError, setLoginError] = useState("");

  function login(email, pass) {
    if (email === "" || pass === "") {
      setLoginError("Todos los campos son obligatorios");
      return;
    }

    auth.signInWithEmailAndPassword(email, pass)
      .then(response => {})
      .catch(error => {
        setLoginError("Credenciales inválidas.");
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={text => setPass(text)}
        value={pass}
      />

      <Pressable style={styles.button} onPress={() => login(email, pass)}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>

      {loginError !== "" ? (
        <Text style={styles.error}>{loginError}</Text>
      ) : null}

      <Pressable onPress={() => props.navigation.navigate("Register")}>
        <Text style={styles.link}>¿No tenés cuenta? Registrate</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    marginBottom: 10,
    borderRadius: 8,
    borderColor: "#ff4da6"
  },
  button: {
    backgroundColor: "#ff66b2",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    width: 100
  },
  error: {
    color: "red",
    marginTop: 10,
    width: 250
  },
  link: {
    marginTop: 20,
    width: 200
  }
});

export default Login;