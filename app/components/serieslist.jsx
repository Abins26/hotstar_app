import React, { useState,useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import apifetch from "../Apifetch/apifetch"

const SeriesScroll = () => {
  const [data, setData] = useState([]);
   
  useEffect(() => {
    const getData = async () => {
      const movies = await apifetch('drama');
      setData(movies);
      // console.log(movies);
    };
    getData();
  }, []);

    return (
    <View style={styles.container}>
      <Text style={styles.cardHeading}>Popular Movies</Text>
      {/* <Pressable><Text>{">"}</Text></Pressable> */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        {data.map((movie, index) => (
          <View key={index} style={styles.cards}>
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
    backgroundColor: 'black',
    height: "auto",
    width: '100%',
  },
  cardContainer: {
    // backgroundColor: "gray",
    width: "auto",
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
    margin: 4,
    width: 120,
    height: 160,
    paddingBottom:6
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
});

export default SeriesScroll;
