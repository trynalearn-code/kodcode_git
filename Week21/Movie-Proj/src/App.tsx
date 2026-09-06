
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import Favorites from "./pages/Favorites"
import MainLayout from "./Layouts/MainLayout"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Movies />} />
            <Route path = "/movies" element={<Movies/>}/>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
