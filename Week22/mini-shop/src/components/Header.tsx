import { Link } from "react-router-dom"
import useFavoritesStore from "../store/favoritesStore"
import ThemeToggle from "./ThemeToggle"

function Header() {
  const favorites = useFavoritesStore((state) => state.favorites)
  return (
    <>
      <header className="bg-white text-black dark:bg-gray-800 dark:text-white p-4 flex justify-between items-center">        <h1>Mini Market</h1>
        <nav className="flex gap-4 items-center">        <Link to={"/"}>Home</Link>
          <Link to="/favorites">
            Favorites
            <span className="ml-2 bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
              {favorites.length}
            </span>
          </Link>
        </nav>
        <ThemeToggle />
      </header>
    </>
  )
}

export default Header