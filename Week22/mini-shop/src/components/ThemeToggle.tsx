import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function ThemeToggle() {
    const context = useContext(ThemeContext)
    if (!context){
        throw new Error("ThemeToggle must be used inside ThemeProvider")
    }
    const {theme, setTheme} = context
  return (
    <button onClick={()=>setTheme(theme === "light"? "dark":"light")}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  )
}

export default ThemeToggle