import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";

function PostCard(props) {
  const { post, navigation } = props;
  const { owner, description, likes, image } = post.data;

  let userLike = false;

  if (likes) {
    likes.forEach(like => {
      if (like === auth.currentUser.email) {
        userLike = true;
      }
    });
  }

  function likePost() {
    db.collection("posts")
      .doc(post.id)
      .update({
        likes: likes ? [...likes, auth.currentUser.email] : [auth.currentUser.email]
      })
      .then(() => {})
  }

  function dislikePost() {
    let newLikes = [];

    if (likes) {
      likes.forEach(like => {
        if (like !== auth.currentUser.email) {
          newLikes.push(like);
        }
      });
    }

    db.collection("posts")
      .doc(post.id)
      .update({
        likes: newLikes
      })
      .then(() => {})
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

      {userLike ? (
        <Pressable style={styles.button} onPress={() => dislikePost()}>
          <Text style={styles.buttonText}>Quitar like</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.button} onPress={() => likePost()}>
          <Text style={styles.buttonText}>Me gusta</Text>
        </Pressable>
      )}

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Comments", { id: post.id })}
      >
        <Text style={styles.buttonText}>Comentar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
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