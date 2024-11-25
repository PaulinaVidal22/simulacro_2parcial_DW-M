import React from "react";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDeletePlanet } from "../hooks/useDeletePlanet";

export default function DeleteButton({ id, navigation }) {
  const { deletePlanet, loading } = useDeletePlanet();

  const handleDelete = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this planet?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deletePlanet(id, () => navigation.navigate("Home"));
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleDelete} disabled={loading} >
      <Ionicons name="trash" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
