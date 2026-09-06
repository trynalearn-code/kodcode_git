import MovieList from "../components/MovieList"
import { movies } from "../data/movies"
import { useFavorites } from "../store/useFavorites"

function Favorites() {
  const favoriteIds = useFavorites((state)=>state.favorites)
  const reset = useFavorites((state)=>state.reset)
  const favoriteMovies = movies.filter((movie)=>favoriteIds.includes(movie.id))
  return (
    <>
    <h1>Favorites</h1>
    <button onClick={reset}>Reset</button>
    <MovieList movies={favoriteMovies}/>
    </>
  )
}

export default Favorites