import FavoritesList from "../components/FavoritesList"
import ProductCard from "../components/ProductCard"
import useFavoritesStore from "../store/favoritesStore"

function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites)
  return (
    <>
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-6">

      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (<FavoritesList/>
      )
    }
    </div>
    </>
  )
}

export default FavoritesPage