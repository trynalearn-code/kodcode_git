import useFavoritesStore from "../store/favoritesStore"
import ProductCard from "./ProductCard"


function FavoritesList() {
    const favorites = useFavoritesStore((state)=> state.favorites)
  return (
    <>
    {favorites.map((product)=>(
        <ProductCard key={product.id} product={product}/>
    ))}
    </>
  )
}

export default FavoritesList