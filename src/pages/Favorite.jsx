import "../css/Favorites.css"
import { UseMovieContext } from "../contexts/movieContext"
import MovieCard from "../components/moviecard"


function Favorite(){''

    const {favorites}= UseMovieContext();
    if(favorites){
        return (<div>
            <h2 className="favorites">Your Favorites</h2><div className="movies-grid">
        {favorites.map(movie=> 
        (
        <MovieCard movie={movie} key={movie.id}/>
           
        )
        )}
    </div>
    </div>);
    }
    return(
        <div className="favorites-empty">
            <h2>No favorite Photos yet</h2>
            <p>start adding photos to your favoites and they will appear here</p>
        </div>
    )
}

export default Favorite