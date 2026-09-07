import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import type { Product } from "../types/product"
import ProductDetails from "../components/ProductDetails"

function ProductPage() {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data, loading, error} = useFetch<Product>(
    `https://fakestoreapi.com/products/${id}`
  )
  console.log(data)
  if (loading) return <p>loading...</p>
  if (error) return <p>{error}</p>
  return (
    <>
    <button onClick={()=>navigate("/")}>Back</button>
    <ProductDetails product={data!}/>
    </>
  )
}

export default ProductPage