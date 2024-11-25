import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Ionicons name="add" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginVertical: 10,
  },
});
