import { useContext, useState } from "react"
import SearchBar from "../components/SearchBar"
import useFetch from "../hooks/useFetch"
import type { Product } from "../types/product"
import ProductCard from "../components/ProductCard"
import ThemeContext from "../context/ThemeContext"

function HomePage() {
  const { data, loading, error } = useFetch<Product[]>("https://fakestoreapi.com/products")
  const [search, setSearch] = useState("")
  if (loading) return <p>loading...</p>
  if (error) return <p>{error}</p>
  const filtered = data?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()))

  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("App must be used inside ThemeProvider")
  }
  const { theme } = context

  return (
    <>
      <div className={theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        <SearchBar search={search} setSearch={setSearch} />
        <div>
          {filtered?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage