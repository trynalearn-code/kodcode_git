import type { Product } from "../types/product"

interface ProductDetailsProps{
    product:Product
}

function ProductDetails({product}:ProductDetailsProps) {
  return (
    <>
    <img src={product.image} alt={product.title}/>

    <h1>{product.title}</h1>

    <p>${product.price}</p>

    <p>{product.description}</p>

    <p>{product.category}</p>
    </>
  )
}

export default ProductDetails