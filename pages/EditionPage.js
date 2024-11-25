import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Alert, ActivityIndicator, Text } from "react-native";
import { useFetchPlanet } from "../hooks/useFetchPlanet";
import { useEditPlanet } from "../hooks/useEditPlanet";
import NewItemButton from "../components/newItemButton";

const EditionPage = ({ navigation, route }) => {
  const { id } = route.params;
  const { planet, loading: loadingPlanet, error: fetchError } = useFetchPlanet(id);
  const { editPlanet, loading: editing, error: editError } = useEditPlanet();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [moons, setMoons] = useState("");
  const [moonNames, setMoonNames] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (planet) {
      setName(planet.name || "");
      setDescription(planet.description || "");
      setMoons(String(planet.moons || ""));
      setMoonNames(planet.moon_names?.join(", ") || "");
      setImage(planet.image || "");
    }
  }, [planet]);

  const handleEditPlanet = () => {
    const updatedPlanet = {
      name,
      description,
      moons: parseInt(moons, 10),
      moon_names: moonNames.split(",").map((moon) => moon.trim()),
      image,
    };

    // id

    editPlanet(id, updatedPlanet, () => {
      navigation.navigate("Home");
    });

    if (editError) {
      Alert.alert("Error", editError);
    }
  };

  if (loadingPlanet) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

if (fetchError) {
    Alert.alert("Error", fetchError);
    return (
        <View style={styles.errorContainer}>
            <Text style={{ color: "red", fontSize: 16 }}>Error: {fetchError}</Text>
        </View>
    );
}


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Planet Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Moons"
        value={moons}
        keyboardType="numeric"
        onChangeText={setMoons}
      />
      <TextInput
        style={styles.input}
        placeholder="Moon Names (comma separated)"
        value={moonNames}
        onChangeText={setMoonNames}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />

      <NewItemButton
        onPress={handleEditPlanet}
        loading={editing}
        style={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 30,
    paddingLeft: 10,
    fontSize: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditionPage;



// import React, { useState } from "react";
// import { View, TextInput, StyleSheet, Alert } from "react-native";
// import { useEditPlanet } from "../hooks/useEditPlanet";
// import NewItemButton from "../components/newItemButton";

// const EditionPage = ({ navigation, route }) => {
//   const { editPlanet, loading, error } = useEditPlanet();
//   const { planet } = route.params;

//   const [name, setName] = useState(planet?.name || "");
//   const [description, setDescription] = useState(planet?.description || "");
//   const [moons, setMoons] = useState(String(planet?.moons || ""));
//   const [moonNames, setMoonNames] = useState(
//     planet?.moon_names?.join(", ") || ""
//   );
//   const [image, setImage] = useState(planet?.image || "");

//   const handleEditPlanet = () => {
//     const updatedPlanet = {
//       name,
//       description,
//       moons: parseInt(moons, 10),
//       moon_names: moonNames.split(",").map((moon) => moon.trim()),
//       image,
//     };

//     editPlanet(planet.id, updatedPlanet, () => {
//       navigation.navigate("Home");
//     });

//     if (error) {
//       Alert.alert("Error", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Planet Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Number of Moons"
//         value={moons}
//         keyboardType="numeric"
//         onChangeText={setMoons}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Moon Names (comma separated)"
//         value={moonNames}
//         onChangeText={setMoonNames}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Image URL"
//         value={image}
//         onChangeText={setImage}
//       />

//       <NewItemButton
//         onPress={handleEditPlanet}
//         loading={loading}
//         style={styles.addButton}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   input: {
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 20,
//     marginBottom: 30,
//     paddingLeft: 10,
//     fontSize: 16,
//   },
// });

// export default EditionPage;
