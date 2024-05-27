import React,{useState,useEffect} from 'react';
import { View, Text,Image, StyleSheet,TextInput,FlatList } from 'react-native';
import apifetch from "../Apifetch/apifetch";
import { Ionicons } from '@expo/vector-icons'

const SearchScreen = () => {
  const [data, setData] = useState([]);
  // const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const movies = await apifetch('drama');
      setData(movies);
      setFilteredImages(movies);
      // console.log(movies);
    };
    getData();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === '') {
      setFilteredImages(data); // Show all images if search term is empty
    } else {
      const filtered = data.filter((movies) =>
        movies.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // placeholder= {  <Ionicons name='search-outline'/>" Search Movie"} 
        value={searchTerm}
        onChangeText={handleSearch}
        />
         <Text style={styles.text}></Text>
      <FlatList
        data={filteredImages}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // Display images in a 2-column grid
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.posterURL }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    paddingTop:40,
    backgroundColor:"black",
  },
  input:{
    height: 40,
    borderColor: '#d6e9a383',
    borderWidth: 3,
    marginBottom: 10,
    paddingLeft: 8,
    color:"black",
    fontSize:20,
    backgroundColor:"#fffffff8",
  },
  text: {
    fontSize: 20,
    color:"white"
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight:"400",
    color: '#cec7c7',
    textAlign: 'center',
  },
});

export default SearchScreen;
