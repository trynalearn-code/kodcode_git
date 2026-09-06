import { useNavigate } from "react-router-dom"
import type { Movie } from "../data/movies"
interface MovieProps {
    movie: Movie
}

const MovieCard = ({ movie }: MovieProps) => {
    const navigate = useNavigate()
    return (

        <article>
            <h3>Title: {movie.title}</h3>
            <p>Description: {movie.body}</p>
            <button onClick={() => navigate(`/movies/${movie.id}`)}>View</button>
        </article>

    )
}

export default MovieCard