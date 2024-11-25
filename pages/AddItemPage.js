import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert} from "react-native";
import { useAddPlanet } from "../hooks/useAddPlanet";
import NewItemButton from "../components/newItemButton";

const AddItemPage = ({ navigation }) => {
  const { addPlanet, loading, error } = useAddPlanet();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [moons, setMoons] = useState("");
  const [moonNames, setMoonNames] = useState("");
  const [image, setImage] = useState("");

  const handleAddPlanet = () => {
    const newPlanet = {
      name,
      description,
      moons: parseInt(moons, 10),
      moon_names: moonNames.split(",").map((moon) => moon.trim()),
      image,
    };

    addPlanet(newPlanet, () => {
      navigation.navigate("Home");
    });

    if (error) {
      Alert.alert("Error", error);
    }
  };

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

      <NewItemButton onPress={handleAddPlanet} loading={loading} style={styles.addButton} />

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
  loader: {
    marginTop: 10,
  },
});

export default AddItemPage;

// import React, { useState } from "react";
// import { View, TextInput, StyleSheet, Alert} from "react-native";
// import { useAddPlanet } from "../hooks/useAddPlanet";
// import NewItemButton from "../components/newItemButton";

// const AddItemPage = ({ navigation }) => {
//   const { addPlanet, loading, error } = useAddPlanet();

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [moons, setMoons] = useState("");
//   const [moonNames, setMoonNames] = useState("");
//   const [image, setImage] = useState("");

//   const handleAddPlanet = () => {
//     const newPlanet = {
//       name,
//       description,
//       moons: parseInt(moons, 10),
//       moon_names: moonNames.split(",").map((moon) => moon.trim()),
//       image,
//     };

//     addPlanet(newPlanet, () => {
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

//       <NewItemButton onPress={handleAddPlanet} loading={loading} style={styles.addButton} />

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
//   loader: {
//     marginTop: 10,
//   },
// });

// export default AddItemPage;


