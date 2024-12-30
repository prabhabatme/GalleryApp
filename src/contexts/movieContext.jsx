import { createContext,useState,useContext,useEffect } from "react";

const MovieContext = createContext()

export const UseMovieContext =() => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const[favorites,setfavorites] =useState([])
    
    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites")
        if(storedFavs) setfavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },
    [favorites])

    const addToFavorties   =(movie) =>
    {
        setfavorites(prev => [...prev,movie])
    }

    const removeFromFavorites =(movieId) =>
    {
setfavorites(prev=> prev.filter(movie=>movie.id!==movieId))
    }

    const isfavorite =(movieId) =>
    {
        return favorites.some(movie => movie.id ===movieId)
    }

    const value ={
        favorites,
        addToFavorties,
        removeFromFavorites,
        isfavorite
    }
    return <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
}