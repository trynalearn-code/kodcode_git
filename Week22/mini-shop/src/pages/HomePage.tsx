import { useState } from "react"
import SearchBar from "../components/SearchBar"
import useFetch from "../hooks/useFetch"
import type { Product } from "../types/product"
import ProductCard from "../components/ProductCard"

function HomePage() {
  const {data, loading, error} = useFetch<Product[]>("https://fakestoreapi.com/products")
  const [search, setSearch] = useState("")
  if (loading) return <p>loading...</p>
  if (error) return <p>{error}</p>
  const filtered = data?.filter((product)=>
  product.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
    <div>
      <SearchBar search={search} setSearch={setSearch}/>
    </div>
    <div>
      {filtered?.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
    </>
  )
}

export default HomePage