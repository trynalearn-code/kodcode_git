import { create } from "zustand"
import type { Product } from "../types/product"

interface FavoritesStore {
    favorites: Product[],
    addFavorite: (product: Product) => void,
    removeFavorite: (productId: number) => void,
    isFavorite: (productId: number) => boolean
}

const useFavoritesStore = create<FavoritesStore>((set) => ({
    favorites: [],
    addFavorite: (product) => {
        set((state) => ({
            favorites: [...state.favorites, product]
        }))
    },
    removeFavorite: (productId) => {
        set((state) => ({
            favorites: state.favorites.filter(
                (product) => product.id !== productId
            )
        }))
    },
    isFavorite: (productId) => {
        return useFavoritesStore
            .getState()
            .favorites.some((product) => product.id === productId)
    }
}))

export default useFavoritesStore