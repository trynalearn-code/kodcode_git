import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import FavoritesPage from "./pages/FavoritesPage"
import ThemeContext, { ThemeProvider } from "./context/ThemeContext"
import { useContext } from "react"

function App() {
  // const context = useContext(ThemeContext)
  // if (!context) {
  //   throw new Error("App must be used inside ThemeProvider")
  // }
  // const { theme } = context
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
