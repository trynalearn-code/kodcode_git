import type { Product } from "../types/product"
import useFavoritesStore from "../store/favoritesStore"

interface ProductDetailsProps{
    product:Product
}

function ProductDetails({product}:ProductDetailsProps) {
  const {addFavorite, removeFavorite, isFavorite} = useFavoritesStore()
  const favorite = isFavorite(product.id)
  return (
    <>
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-6">

    <img src={product.image} alt={product.title}/>

    <h1>{product.title}</h1>

    <p>${product.price}</p>

    <p>{product.description}</p>

    <p>{product.category}</p>
    </div>
    <button onClick={()=>{
      if (favorite){
        removeFavorite(product.id)
      } else {
        addFavorite(product)
      }
    }}>{favorite? "Remove from favorites": "Add to favorites"}
    </button>
    </>
  )
}

export default ProductDetails