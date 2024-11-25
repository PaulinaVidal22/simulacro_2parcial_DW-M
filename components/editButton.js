import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function EditButton({ navigation, id }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("EditionPage", { id })}
    >
      <Ionicons name="pencil" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
