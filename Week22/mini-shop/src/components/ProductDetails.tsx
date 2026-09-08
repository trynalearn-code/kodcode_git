import type { Product } from "../types/product"

interface ProductDetailsProps{
    product:Product
}

function ProductDetails({product}:ProductDetailsProps) {
  return (
    <>
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-6">

    <img src={product.image} alt={product.title}/>

    <h1>{product.title}</h1>

    <p>${product.price}</p>

    <p>{product.description}</p>

    <p>{product.category}</p>
    </div>
    </>
  )
}

export default ProductDetails