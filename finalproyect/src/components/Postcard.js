import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";
import firebase from "firebase";

function PostCard(props) {
  const { post, navigation } = props;
  const { owner, description, likes, image } = post.data;

  function likePost() {
    if (likes && likes.indexOf(auth.currentUser.email) !== -1) {
      db.collection("posts")
        .doc(post.id)
        .update({
          likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(() => {})
    } else {
      db.collection("posts")
        .doc(post.id)
        .update({
          likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(() => {})
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.owner}>{owner}</Text>

      <Text style={styles.description}>{description}</Text>

      {image ? (
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="contain"
        />
      ) : null}

      <Text style={styles.likes}>
        Likes: {likes ? likes.length : 0}
      </Text>

<<<<<<< HEAD
      <Pressable onPress={() => navigation.navigate("comments", { id: post.id })}>
        <Text style={styles.button}>Comentar</Text>
=======
      <Pressable style={styles.button} onPress={() => likePost()}>
        <Text style={styles.buttonText}>Me gusta</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Comments", { id: post.id })}
      >
        <Text style={styles.buttonText}>Comentar</Text>
>>>>>>> 35f5b9d2bd6c0aa2177cbf6dddc99314f77a7939
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10
  },
  owner: {
    fontSize: 16,
    marginBottom: 5
  },
  description: {
    marginBottom: 10
  },
  image: {
    height: 200,
    marginBottom: 10
  },
  likes: {
    marginBottom: 10
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16
  }
});

export default PostCard;
