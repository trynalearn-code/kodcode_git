import { Link } from "react-router-dom"
import useFavoritesStore from "../store/favoritesStore"
import ThemeToggle from "./ThemeToggle"

function Header() {
  const favorites = useFavoritesStore((state) => state.favorites)
  return (
    <>
      <header className="bg-white text-black dark:bg-gray-800 dark:text-white p-4">
        <h1>Mini Market</h1>
        <nav>
        <Link to={"/"}>Home</Link>
        <Link to="/favorites"
          className="text-blue-500 dark:text-blue-300">Favorites
          <span>{favorites.length}</span>
        </Link>
          </nav>
        <ThemeToggle />
      </header>
    </>
  )
}

export default Header