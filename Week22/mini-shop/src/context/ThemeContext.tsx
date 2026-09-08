import { createContext, useState, useEffect } from "react"

interface ThemeContextType {
    theme: "light" | "dark"
    setTheme: (theme: "light" | "dark") => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light")
    useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext