import type { Movie } from "../data/movies"

import MovieCard from "./MovieCard"

interface MovieListProps {
    movies: Movie[]
}

function MovieList({ movies }: MovieListProps) {
    return (
        (movies.map((movie) => (
            <div key={movie.id}>
                <MovieCard movie={movie} />
            </div>

        )))

    )
}

export default MovieList