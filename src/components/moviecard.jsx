import "../css/MovieCard.css"
import { UseMovieContext } from "../contexts/movieContext";
function MovieCard({movie})
    {

        const {isfavorite,addToFavorties,removeFromFavorites} =UseMovieContext() 
        const favorite = isfavorite(movie.id)
       
        function onFavorieClick(e){
e.preventDefault()
if(favorite) removeFromFavorites(movie.id)
    else addToFavorties(movie)


        }

return (
    <div className="movie-card">
<div className="movie-poster">
    <img src={movie.src.medium} allt={movie.photographer}></img>
<div className="movie-overlay">
    <button className={`favorite-btn ${favorite ?"active" :""}`} onClick={onFavorieClick}>
    ♥ </button>
</div>
</div>
<div className="movie-info">
    <h3>{movie.photographer}</h3>
    <p>{movie.alt}</p>
</div>
    </div>
)

    }
export default MovieCard
   
