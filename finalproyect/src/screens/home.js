import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { db } from "../firebase/config";
import PostCard from "../components/Postcard";

function Home(props) {
  const [posteos, setPosteos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("AAAAAAAAAA");
  

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
        <ActivityIndicator size="large" color="#ff66b2" />
      ) : error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
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
    width: "100%",
    backgroundColor: '#fff0f6',
    padding: 12
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#3b0a1e'
  },
  flatlist: {
    width: "100%",
    flex: 1
  }
});

export default Home; 