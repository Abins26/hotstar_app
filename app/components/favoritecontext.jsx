import React, { createContext, useState, useEffect } from 'react';
 
const FavoriteContext = createContext();

 const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    
    const toggleFavorite = (movie) => {
        const isFavorite = favorites.some((fav) => fav.id === movie.id);
        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav.id !== movie.id));
        } else {
            setFavorites([...favorites, movie]);
        }
    }
    const [numberOfFavoriteMovies, setNumberOfFavoriteMovies] = useState(0);
    
    useEffect(() => {
        setNumberOfFavoriteMovies(favorites.length);
      }, [favorites]);
     
    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite,numberOfFavoriteMovies }}>
          {children}
        </FavoriteContext.Provider>
      );
};

export { FavoriteContext,FavoriteProvider};