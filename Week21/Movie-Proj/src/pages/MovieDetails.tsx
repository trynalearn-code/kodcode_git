import { useNavigate, useParams } from "react-router-dom"
import { movies } from "../data/movies"
import MovieCard from "../components/MovieCard";
import NotFound from "./NotFound";
import { useFavorites } from "../store/useFavorites";


function MovieDetails() {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === Number(id));
    const add = useFavorites(state => state.add)
    const sub = useFavorites(state => state.subtract)
    const movieIds = useFavorites(state => state.favorites)

    const alreadyFavorite = movieIds.includes(Number(id))

    if (!movie) return <NotFound />
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate(`/`)}>Back</button>
            <MovieCard movie={movie} />

            <button onClick={() => alreadyFavorite ? sub(movie.id) : add(movie.id)}>{alreadyFavorite ? "Remove from Favorites" : "Add to favorites"}</button>
        </>
    )
}

export default MovieDetails