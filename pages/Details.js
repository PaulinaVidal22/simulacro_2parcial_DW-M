import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFetchPlanet } from "../hooks/useFetchPlanet";
import Info from "../components/info";
import FooterBar from "../components/footerBar";


export default function Details({ route, navigation }) {
  const { id } = route.params;
  const { planet, loading, error } = useFetchPlanet(id);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (error) {
    Alert.alert("Error", error);
    return null;
  }

  return (
    <View style={styles.container}>
        <Info
            name={planet.name}
            description={planet.description}
            image={planet.image}
            moons={planet.moons}
            moonNames={planet.moon_names}
            style={styles.info}
        />
        <FooterBar navigation={navigation} id={id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
    backgroundColor: "#f8f9fa",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex:1,
    marginVertical: 5,
  },
});

