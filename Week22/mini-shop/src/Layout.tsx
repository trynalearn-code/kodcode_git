import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Layout() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <Outlet />
      </main>

      <Footer />
    </>

  )
}

export default Layout