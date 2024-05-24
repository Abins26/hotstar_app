import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieScroll from './movielist';

const { width } = Dimensions.get('window');

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
// console.log(movie);
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
      <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Officia nulla nisi dicta nobis quia veniam ad placeat dolorem reiciendis minus. 
      Quam dolorem quisquam natus recusandae expedita id voluptatibus odio earum!</Text>
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
    paddingleft:8,
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
    paddingBottom:4,
    paddingTop:6
  },
});

export default MovieDetailScreen;
