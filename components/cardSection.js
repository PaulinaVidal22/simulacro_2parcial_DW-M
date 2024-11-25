import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./card";

export default function CardSection({ planets, onPress }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card planet={item} onPress={onPress} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
});
