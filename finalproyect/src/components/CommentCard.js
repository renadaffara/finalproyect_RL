import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CommentCard(props) {
  const { comment } = props;
  const { owner, text } = comment.data;

  return (
    <View style={styles.card}>
      <Text style={styles.owner}>{owner}</Text>
      <Text style={styles.text}>{text}</Text>
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
    fontSize: 14,
    marginBottom: 5
  },
  text: {
    fontSize: 16
  }
});

export default CommentCard;