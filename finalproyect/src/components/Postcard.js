import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function PostCard(props) {
  const { post, navigation, onLike } = props;
  const { owner, description, likes, image } = post.data;

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

      <Pressable style={styles.button} onPress={() => onLike(post.id, likes)}>
        <Text style={styles.buttonText}>Me gusta</Text>
      </Pressable>

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