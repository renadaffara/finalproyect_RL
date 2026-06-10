import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";
import PostCard from "../components/Postcard";

function Profile(props) {
  const [misPosts, setMisPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      setEmail(auth.currentUser.email);

      db.collection("posts")
        .where("owner", "==", auth.currentUser.email)
        .onSnapshot(docs => {
          let posts = [];

          docs.forEach(doc => {
            posts.push({
              id: doc.id,
              data: doc.data()
            });
          });

          setMisPosts(posts);
          setLoading(false);
        });
    }
  }, []);

  function logout() {
    auth.signOut()
      .then(() => {
        props.navigation.navigate("Login");
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{email}</Text>

      <Text style={styles.subtitle}>Mis posteos</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#ff66b2" />
      ) : (
        <FlatList
          style={styles.flatlist}
          data={misPosts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard
              post={item}
              navigation={props.navigation}
            />
          )}
        />
      )}

      <Pressable style={styles.button} onPress={() => logout()}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
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
  label: {
    fontSize: 16,
    marginTop: 5
  },
  value: {
    fontSize: 16,
    marginBottom: 15
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10
  },
  flatlist: {
    width: "100%",
    flex: 1
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: '#ff66b2',
    borderRadius: 6
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff'
  }
});

export default Profile;