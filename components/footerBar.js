import React from "react";
import { View, StyleSheet } from "react-native";
import EditButton from "../components/editButton";
import DeleteButton from "../components/deleteButton";

export default function FooterBar({ navigation, id }) {
  return (
    <View style={styles.buttonContainer}>
       <EditButton navigation={navigation} id={id} />
       <DeleteButton id={id} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
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
