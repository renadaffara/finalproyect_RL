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
      <Pressable style={styles.button} onPress={() => likePost()}>
        <Text style={styles.buttonText}>Me gusta</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("comments", { id: post.id })}
      >
        <Text style={styles.buttonText}>Comentar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    width: "92%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },

  owner: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },

  description: {
    fontSize: 15,
    marginBottom: 15,
    color: "#444"
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 12
  },

  likes: {
    marginBottom: 12,
    color: "#666"
  },

  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default PostCard;
