import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { auth, db } from "../firebase/config";

function Comments(props) {
  const { id } = props.route.params;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    db.collection("comments").onSnapshot(docs => {
      let commentsArray = [];

      docs.forEach(doc => {
        let comentario = {
          id: doc.id,
          data: doc.data()
        };

        if (comentario.data.postId === id) {
          commentsArray.push(comentario);
        }
      });

      setComments(commentsArray);
      setLoading(false);
    });
  }, []);

  function addComment() {
    if (comment === "") {
      setError("El comentario no puede estar vacío");
      return;
    }

    db.collection("comments")
      .add({
        owner: auth.currentUser.email,
        text: comment,
        postId: id,
        createdAt: Date.now()
      })
      .then(() => {
        setComment("");
        setError("");
      })
      .catch(e => {
        console.log(e);
        setError("No se pudo agregar el comentario");
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comentarios</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribí un comentario"
        onChangeText={text => setComment(text)}
        value={comment}
      />

      <Pressable style={styles.button} onPress={() => addComment()}>
        <Text style={styles.buttonText}>Comentar</Text>
      </Pressable>

      {error !== "" ? <Text style={styles.error}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator size="large" color="purple" />
      ) : (
        <FlatList
          style={styles.flatlist}
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentCard}>
              <Text style={styles.owner}>{item.data.owner}</Text>
              <Text style={styles.commentText}>{item.data.text}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16
  },
  error: {
    color: "red",
    marginBottom: 10
  },
  flatlist: {
    width: "100%",
    flex: 1
  },
  commentCard: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  owner: {
    fontSize: 14,
    marginBottom: 5
  },
  commentText: {
    fontSize: 16
  }
});

export default Comments;