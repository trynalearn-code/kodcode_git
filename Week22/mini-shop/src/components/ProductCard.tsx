import { Link } from "react-router-dom"
import type { Product } from "../types/product"
import useFavoritesStore from "../store/favoritesStore"

interface ProductCardProps {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    const {addFavorite} = useFavoritesStore()
    return (
        <>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />

                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </Link>
        </>
    )
}

export default ProductCard