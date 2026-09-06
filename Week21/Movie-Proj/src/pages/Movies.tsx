import { useState } from "react"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import { movies } from "../data/movies"
import MovieList from "../components/MovieList"

function Movies() {
    const [search, setSearch] = useState<string>("")
    const filteredData =
        search === "" ? movies : movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <SearchBar search={search} setSearch={setSearch} />
            <MovieList movies={filteredData} />
        </>
    )
}

export default Movies