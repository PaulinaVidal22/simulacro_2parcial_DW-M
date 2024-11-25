import React from "react";
import { View, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Picture = ({ source, alt }) => {
  return (
    <View style={styles.frame}>
      <Image 
        source={{ uri: source }} 
        style={styles.image} 
        accessibilityLabel={alt} 
      />
    </View>
  );
};

Picture.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  frame: {
    width: "90%",
    maxWidth: 300,
    aspectRatio: 1, 
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    alignSelf: "center", 
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
});

export default Picture;
