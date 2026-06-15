import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { auth, db } from "../firebase/config";

function Postcard(props) {

  const postId = props.info.id;

  const likesFromPost = props.info.data.likes
    ? props.info.data.likes
    : [];

  const [likes, setLikes] = useState(likesFromPost);

  useEffect(() => {

    setLikes(
      props.info.data.likes
        ? props.info.data.likes
        : []
    );

  }, [props.info.data.likes]);

  let estaLikeado = false;

  likes.forEach(like => {

    if (like === auth.currentUser.email) {
      estaLikeado = true;
    }

  });

  function manejarLikes() {

    let updatedLikes = [];

    if (estaLikeado) {

      likes.forEach(like => {

        if (like !== auth.currentUser.email) {
          updatedLikes.push(like);
        }

      });

    } else {

      likes.forEach(like => {
        updatedLikes.push(like);
      });

      updatedLikes.push(auth.currentUser.email);

    }

    setLikes(updatedLikes);

    db.collection("posts")
      .doc(postId)
      .update({
        likes: updatedLikes
      })
      .then(() => {});

  }

  function manejarComentario() {

    props.navigation.navigate(
      "Comments",
      {
        id: postId
      }
    );

  }

  return (
    <View style={styles.card}>

      <Text style={styles.owner}>
        {props.info.data.owner}
      </Text>

      <Text style={styles.description}>
        {props.post.data.description}
      </Text>

      <View style={styles.botones}>

        <Pressable
          style={styles.button}
          onPress={manejarComentario}
        >
          <Text style={styles.buttonText}>
            Comentar
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={manejarLikes}
        >
          <Text style={styles.buttonText}>
            {estaLikeado
              ? "Quitar like"
              : "Me gusta"}
          </Text>
        </Pressable>

      </View>

      <Text style={styles.likes}>
        Likes: {likes.length}
      </Text>

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
    marginBottom: 10
  },

  description: {
    marginBottom: 10
  },

  linea: {
    borderWidth: 1,
    marginBottom: 10
  },

  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    width: "48%"
  },
  buttonText: {
    fontSize: 16
  },

  likes: {
    fontSize: 16
  }

});

export default Postcard; 