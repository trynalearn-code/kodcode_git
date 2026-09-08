import { Link } from "react-router-dom"
import type { Product } from "../types/product"
import useFavoritesStore from "../store/favoritesStore"

interface ProductCardProps {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore()
    const favorite = isFavorite(product.id)
    return (
        <>
        <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-4"> 
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />

                <h2>{product.title}</h2>
                <p>${product.price}</p>
                </Link>
                <button   className="bg-blue-500 text-white p-2" onClick={() => {
                    if (favorite) removeFavorite(product.id)
                    else {
                addFavorite(product)
            }
                }}>
                    {favorite ? "Remove from favorites": "Add to favorites"}
                </button>
            </div>
        </>
    )
}

export default ProductCard