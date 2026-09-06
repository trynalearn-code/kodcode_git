import { useEffect, useRef } from "react"

interface searchBarProps {
    search: string,
    setSearch: (search: string) => void
}

function SearchBar({ search, setSearch }: searchBarProps) {
    const searchRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        searchRef.current?.focus()
    }, [])
    return (
        <>

            <label htmlFor="movie-search">Search</label>
            <input value={search} ref={searchRef} type="text" placeholder="Search Movie" onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

export default SearchBar