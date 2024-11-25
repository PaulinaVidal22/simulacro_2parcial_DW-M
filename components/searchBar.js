import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search planets..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginLeft: 5,
  },
});
