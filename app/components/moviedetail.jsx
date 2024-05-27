import React,{useContext} from 'react';
import { View, Text, StyleSheet, Image,Dimensions, Pressable,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import MovieScroll from './movielist';
import { Ionicons } from '@expo/vector-icons';
import {FavoriteContext} from "./favoritecontext";

const { width } = Dimensions.get('window');


const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
 
  // const { favorites, toggleFavorite } = useContext(FavoriteContext);
  // const isFavorite = favorites.some((fav) => fav.id === movie.id);

  // console.log(movie);

const { favorites, toggleFavorite } = useContext(FavoriteContext);
const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.posterURL }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Pressable>
        <View style={styles.bottonsub}>
          <Text style={styles.bottonsubtext}><Icon name="caret-forward" size={22} color="black" />Subscribe to watch</Text>
        </View>
      </Pressable>
      <View style={styles.smalltext}>
        <Text style={styles.smalltext}>Action • Drama • Family • Animation</Text>

      </View>
      <View style={styles.icons}>
        <AntDesign name="plus" size={22} color="white" />
        <Icon name="arrow-redo-outline" size={30} color="white" />
        {/* <MaterialIcons name="download"/> */}

        <TouchableOpacity
          onPress={() => toggleFavorite(movie)}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={30}
            color={isFavorite ? "red" : "white"}
          />
        </TouchableOpacity>
      </View>
      <View>

      </View>
      <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia nulla nisi dicta nobis quia veniam ad placeat dolorem reiciendis minus.
        Quam dolorem quisquam natus recusandae expedita id voluptatibus odio earum!</Text>

      {/* <TouchableOpacity onPress={() => toggleFavorite(movie)}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={30}
          color={isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity> */}

      <MovieScroll />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: width,
    height: 350,
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 44,
    fontWeight: '800',
    color: 'white',
    // marginBottom: 16,
  },
  icons:{
    flexDirection:"row",
    left:0,
    justifyContent:'space-evenly',
    paddingBottom:20
  },
  description: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    justifyContent:"center",
    paddingBottom:20,
  },
  bottonsub:{
    backgroundColor:"white",
    height:50,
    paddingLeft:8,
    paddingRight:8,
    width:width,
    alignItems:"center",
    borderRadius:7,
    justifyContent:"center",
    fontWeight:'0',

  },
  bottonsubtext:{
    fontWeight:'600',
    fontSize:22,
    // textAlign:'center',
  }, 
  smalltext:{
    alignItems:"center",
    color:"white",
    fontSize:16,
    paddingBottom:10,
    paddingTop:6
  },
});

export default MovieDetailScreen;
