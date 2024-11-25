import React from "react";
import { View, StyleSheet } from "react-native";
import AddButton from "./addButton";
import SortButton from "./sortButton";

export default function NavBar({ onAddItem, sortPlanets }) {
  return (
    <View style={styles.navBar}>
      <AddButton onPress={onAddItem} />
      <SortButton sortPlanets={sortPlanets} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
