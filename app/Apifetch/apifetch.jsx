// import React, { useState, useEffect } from 'react';
// import MovieCarousel from '../components/movielist'; 
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// const [data, setData] = useState([]);

import axios from 'axios';

const apifetch = async (genre) => { //genre
    try {
      const response = await axios.get(`https://api.sampleapis.com/movies/${genre}`);//${genre}
      return(response.data);
    } catch (error) {
      console.error(`Error fetching data:${genre}`, error);
    }
  };

export default apifetch;
