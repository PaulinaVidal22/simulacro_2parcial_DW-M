import React from 'react';
import { TouchableOpacity, StyleSheet,  ActivityIndicator  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewItemButton = ({ onPress, loading }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {loading ? (
        <ActivityIndicator size="small" color="#4CAF50" />
      ) : (
        <Ionicons name="add-circle" size={60} color="#4CAF50" />
      )}
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60, 
    height: 60, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default NewItemButton;
