import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewHotScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New & Hot Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black",

  },
  text: {
    fontSize: 20,
    color:"white"
  },
});

export default NewHotScreen;
