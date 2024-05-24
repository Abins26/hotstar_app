import React, { useState,useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import apifetch from "../Apifetch/apifetch"
import { useNavigation } from '@react-navigation/native';

const MovieScroll = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      const movies = await apifetch('animation');
      setData(movies);
      // console.log(movies);
    };
    getData();
  }, []);


    return (
    <View style={styles.container}>
      <Text style={styles.cardHeading}>Latest Movies</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        {data.map((movie, index) => (
          <View key={index} style={styles.cards}>
             <Pressable
            key={index}
            style={styles.cards}
            onPress={() => navigation.navigate('MovieDetailScreen', { movie })} >
            <Image source={{ uri: movie.posterURL }} style={styles.cardImage} />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: "auto",
    width: '100%',
  },
  cardContainer: {
    // backgroundColor: "gray",
    width: "auto",
    paddingBottom:4
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 5,
    width: 200,
    color: "white",
    // backgroundColor: "skyblue"
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
    width: 120,
    height: 160,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
});

export default MovieScroll;
