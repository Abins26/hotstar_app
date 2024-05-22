// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import MovieCarousel from './MovieCarousel'; // Import the display component

// export default function MovieList() {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const resp = await axios.get('https://api.sampleapis.com/movies/animation');
//       setData(resp.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <MovieCarousel data={data} />
//   );
// }
