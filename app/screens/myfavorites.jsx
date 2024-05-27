import React,{useContext} from 'react';
import { View, Text, Image, StyleSheet, ScrollView,FlatList,TouchableOpacity,Pressable } from 'react-native';
import {FavoriteContext} from '../components/favoritecontext';
import Ionicons from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const MyFavorites = () => {


// const { favorites, toggleFavorite } = useContext(FavoriteContext);
// const isFavorite = favorites.some((fav) => fav.id === movie.id);
const navigation = useNavigation();

  const { favorites } = useContext(FavoriteContext);
  return (

    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavorites}>No favorite movies yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          // onScr
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            
            <View style={styles.movieCard}>
                {/* <Pressable */}
            {/* key={item.id} */}
            {/* // style={styles.cards} */}
            {/* onPress={() => navigation.navigate('MovieDetailScreen', { item })} ></Pressable> */}
              {/* <TouchableOpacity
                onPress={() => toggleFavorite(item)}>
                <Ionicons
                  name={isFavorite ? "heart" : "heart-outline"}
                  size={30}
                  color={isFavorite ? "red" : "white"}
                />
              </TouchableOpacity> */}
              <Image source={{ uri: item.posterURL }} style={styles.image} />

              <Text style={styles.title}>{item.title}</Text>
              {/* <Text style={styles.genre}>{item.genre}</Text> */}
            </View>
          )}
        />
      )}
    </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  paddingTop:30,
  padding:20,
  justifyContent: 'center',
  backgroundColor: '#000',
  // flexWrap:'wrap',
  // flexDirection:"row",
  // paddingLeft:10,
},
noFavorites: {
  color: '#ffffff',
  fontSize: 18,
},
movieCard: {
  marginBottom: 14,
  
  paddingTop:10,
  width:180,
  height:300,
  alignItems: 'center',
  backgroundColor:"#ffffff",
  borderRadius: 10,
  margin: 10,
  justifyContent: 'center',
//   // width: '70%', 
},
image: {
  padding:8,
  width: 160,
  // width:"100%",
  height: 240,
  borderRadius: 10,

},
title: {
  color: '#000000ab',
  fontSize: 20,
  fontWeight:'400'
  // marginVertical: 10,
},
genre: {
  color: '#aa5050',
  fontSize: 18,
},
});

    
export default MyFavorites;
