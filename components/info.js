import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Picture from "./picture";

const Info = ({ name, description, image, moons, moonNames }) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>{name}</Text>
        <Picture source={image} alt={name} />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.subheading}>Moons: {moons}</Text>
        {moons > 0 && (
          <View style={styles.listContainer}>
            {moonNames.map((moon) => (
              <Text key={moon} style={styles.listItem}>
                {moon}
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  moons: PropTypes.number.isRequired,
  moonNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,  // This makes sure the scrollable content takes the full screen
    backgroundColor: "#fff",
  },
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#333",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    marginVertical: 12,
    color: "#444",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#555",
  },
  listContainer: {
    marginTop: 8,
    paddingLeft: 16,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
});

export default Info;
