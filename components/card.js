import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Card({ planet, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(planet.id)} style={styles.card}>
      <Image source={{ uri: planet.image }} style={styles.image} />
      <Text style={styles.title}>{planet.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
