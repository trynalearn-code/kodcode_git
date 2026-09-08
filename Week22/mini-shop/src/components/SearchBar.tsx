import { useEffect, useRef } from "react"

interface SearchBarProps{
    search:string,
    setSearch:(value:string)=>void
}

function SearchBar({search, setSearch}:SearchBarProps) {
    const searchInput = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        searchInput.current?.focus()
    },[])
    return (
    <input ref={searchInput} type="text" placeholder="search products..." value={search} onChange={(event)=> setSearch(event.target.value)}/>
)
}

export default SearchBar