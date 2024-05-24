import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import CarouselComponen from '../components/carosuel';
import CarouselComponent from '../components/carosuelswiper';
import MovieScroll from '../components/movielist';
import SeriesScroll from "../components/serieslist";
import Popularlaguages from "../components/popularlaguages";


const HomeScreen = () => {
  return (
    <ScrollView >

      <View>

        <View style={styles.container}>
          <CarouselComponent />
        </View>
        <View style={styles.movielist}>
          <MovieScroll />
          <SeriesScroll />
          <Popularlaguages/>
          <MovieScroll />

          {/* <SeriesScroll />
          <SeriesScroll /> */}
          {/* <CarouselComponen/> */}

        </View>

        {/* <Text style={styles.text}>Home Screen</Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display:'flex',
    height:450,
    backgroundColor:"black"
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  movielist:{
    display:'flex',
    // backgroundColor:"white",
    height:"auto",

  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
