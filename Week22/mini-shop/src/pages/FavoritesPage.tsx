import FavoritesList from "../components/FavoritesList"
import useFavoritesStore from "../store/favoritesStore"

function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites)
  return (
    <>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-6">

        <h1>Favorites</h1>
        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <FavoritesList />
          </div>
        )
        }
      </div>
    </>
  )
}

export default FavoritesPage