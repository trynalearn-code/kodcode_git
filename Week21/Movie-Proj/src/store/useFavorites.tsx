import { create } from "zustand"
import { persist } from "zustand/middleware"

interface favoritesProps {
  favorites: number[],
  add: (num: number) => void,
  subtract: (num: number) => void,
  reset: () => void
}

export const useFavorites = create<favoritesProps>()(persist((set) => ({
  favorites: [],
  add: (n) => set(state => ({
    favorites: [...state.favorites, n]
  })),
  subtract: (n) => set(state => ({
    favorites: state.favorites.filter((id) => id !== n)
  })),
  reset: () => set({
    favorites: []
  }),
}),
  { name: "favorites-movies" }
))