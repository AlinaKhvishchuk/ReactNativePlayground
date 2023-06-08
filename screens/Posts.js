import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import usePosts from "../hooks/usePosts.js";
import { Text } from "../components/Text.js";
import colors from "../constants/colors.js";
console.log(colors);
export const Posts = ({ navigation }) => {
  const { data, isLoading, isSuccess } = usePosts();
  return (
    <View style={styles.container}>
      {isLoading && (
        <>
          <Text>Loading...</Text>
        </>
      )}

      {isSuccess && (
        <>
          <Text style={styles.header}>all posts</Text>
          <FlatList
            data={data}
            style={styles.wrapper}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.push("Post", { post: item })}
                style={styles.post}
              >
                <View style={styles.item}>
                  <Text style={styles.postTitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 30,
    color: colors.primary,
    paddingVertical: 10,
  },
  post: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  postTitle: { color: colors.white, textTransform: "capitalize" },
});
