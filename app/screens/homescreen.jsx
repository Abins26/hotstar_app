import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import CarouselComponent from '../components/carosuel';
import CarouselComponent from '../components/carosuelswiper';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <CarouselComponent/> */}
      <CarouselComponent/>
      {/* <Text style={styles.text}>Home Screen</Text> */}
      <MovieScroll/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:450
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
