import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { db } from "../firebase/config";
import PostCard from "../components/Postcard";

function Home(props) {
  const [posteos, setPosteos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot(docs => {
        let posts = [];

        docs.forEach(doc => {
          posts.push({
            id: doc.id,
            data: doc.data()
          });
        });

        setPosteos(posts);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      {loading ? (
        <ActivityIndicator size="large" color="purple" />
      ) : (
        <FlatList
          style={styles.flatlist}
          data={posteos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard
              post={item}
              navigation={props.navigation}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    backgroundColor: "#c43232",
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  flatlist: {
    width: "100%",
    flex: 1
  }
});

export default Home; 