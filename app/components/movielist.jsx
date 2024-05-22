import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const MovieScroll = ({ movies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardHeading}>Latest Movies</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        {movies.map((movie, i) => (
          <View key={i} style={styles.cards}>
            <Image source={{ uri: movie.posterURL }} style={styles.cardImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    height: "auto",
    width: '100%',
  },
  cardContainer: {
    backgroundColor: "gray",
    width: "auto",
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 5,
    width: 200,
    color: "white",
    backgroundColor: "skyblue"
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    width: 120,
    height: 160,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
});

export default MovieScroll;
