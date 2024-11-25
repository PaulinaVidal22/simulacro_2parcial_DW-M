import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Text, Alert } from "react-native";
import CardSection from "../components/cardSection";
import SearchBar from "../components/searchBar";
import NavBar from "../components/navBar";
import { useFetchPlanets } from "../hooks/useFetchPlanets";

export default function Home({ navigation }) {
  const { planets, loading, error} = useFetchPlanets();
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (planets) {
      const results = planets.filter((planet) =>
        planet.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPlanets(results);
    }
  }, [searchQuery, planets]);


  const sortPlanets = () => {
    const sorted = [...filteredPlanets].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredPlanets(sorted);
  };

  const handleAddPlanet = () => {
    navigation.navigate("AddItemPage"); 
  };

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

  if (filteredPlanets.length === 0) {
    return (
      <View style={styles.container}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Text style={styles.emptyMessage}>Did not found any coincidence.</Text>
        <NavBar onAddItem={handleAddPlanet} sortPlanets={sortPlanets}  />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardSection
        planets={filteredPlanets}
        onPress={(id) => navigation.navigate("Details", { id })}
      />
      <NavBar onAddItem={handleAddPlanet} sortPlanets={sortPlanets} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
    paddingBottom: 100,  
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  emptyMessage: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#6c757d",
  },
});



