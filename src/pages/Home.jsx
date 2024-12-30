import MovieCard from "../components/moviecard"
import { useEffect, useState } from "react";
import "../css/Home.css";

import { SearchMovies,getPopularMovies } from "../services/api";
function Home ()
{
    const [searchQuery,setsearchQuery] = useState("");
const [movies,setmovies] = useState([])
const [error, seterror] =useState(null)
const[loading, setloading]=useState(true);

useEffect(() =>{
    const loadPopularMovie = async() =>{
    try{
const popularMovies  = await getPopularMovies()
    setmovies(popularMovies);
    console.log(popularMovies);
}catch(err){
    console.log(err);
    seterror("failed to load")
}
finally{
    setloading(false)
}
    }
    console.log("loading");
    loadPopularMovie();
},[])

const handleSearch =async (e) =>{
e.preventDefault();
    
    
if(loading) return

    setloading(true)
try{
const searchResults = await SearchMovies(searchQuery)
setmovies(searchResults)
seterror(null)
}
catch(err){
    console.log(err)
seterror("failed to search ")
}
finally{
    setloading(false)
}
};
    return(
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for photos..."
                className="search-input"
                value={searchQuery}
                onChange={(e) =>  setsearchQuery(e.target.value)}>

                </input>
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            { loading?(<div className="loading">Loading....</div>):
(<div className="movies-grid">
    {movies.map(movie=> 
    (
    <MovieCard movie={movie} key={movie.id}/>
       
    )
    )}
</div>
)}
        </div>
    )

}

export default Home