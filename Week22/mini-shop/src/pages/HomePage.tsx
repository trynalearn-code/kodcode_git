import { useState } from "react"
import SearchBar from "../components/SearchBar"
import useFetch from "../hooks/useFetch"
import type { Product } from "../types/product"
import ProductCard from "../components/ProductCard"

function HomePage() {
  const { data, loading, error } = useFetch<Product[]>("https://fakestoreapi.com/products")
  const [search, setSearch] = useState("")
  if (loading) return <p>loading...</p>
  if (error) return <p>{error}</p>
  const filtered = data?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">        <SearchBar search={search} setSearch={setSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">          {filtered?.length === 0 ? (
          <p>No products found.</p>
        ) : (filtered?.map((product) => (
          <ProductCard key={product.id} product={product} />
        )))}
        </div>
      </div>
    </>
  )
}

export default HomePage