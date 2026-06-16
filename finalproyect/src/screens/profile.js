import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
  StyleSheet
} from "react-native";
import { auth, db } from "../firebase/config";

function Profile(props) {

  const [misPosts, setMisPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

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

  }, []);

  function logout() {

    auth.signOut();

    props.navigation.navigate("Login");

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Mi Perfil
      </Text>

      <Text style={styles.email}>
        {auth.currentUser.email}
      </Text>

      <Text style={styles.subtitle}>
        Mis posteos
      </Text>

      {
        loading
        ?
        <ActivityIndicator size="large" />
        :
        <FlatList
          data={misPosts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.post}>

              <Text style={styles.postOwner}>
                {item.data.owner}
              </Text>

              <Text style={styles.postDescription}>
                {item.data.description}
              </Text>

              <Text style={styles.postLikes}>
                Likes: {
                  item.data.likes
                    ? item.data.likes.length
                    : 0
                }
              </Text>

            </View>
          )}
        />
      }

      <Pressable
        style={styles.button}
        onPress={() => logout()}
      >
        <Text style={styles.buttonText}>
          Logout
        </Text>
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

  email: {
    fontSize: 16,
    marginBottom: 15
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 10
  },

  post: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },

  postOwner: {
    fontSize: 16,
    marginBottom: 5
  },

  postDescription: {
    marginBottom: 5
  },

  postLikes: {
    fontSize: 14
  },

  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    fontSize: 16
  }

});

export default Profile; 