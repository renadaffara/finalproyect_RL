import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CommentCard(props) {

  return (

    <View style={styles.card}>

      <Text style={styles.owner}>
        {props.comment.data.owner}
      </Text>

      <Text style={styles.text}>
        {props.comment.data.text}
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
    fontSize: 14,
    marginBottom: 5
  },

  text: {
    fontSize: 16
  }

});

export default CommentCard;