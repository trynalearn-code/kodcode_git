import { create } from "zustand"
import type { Product } from "../types/product"

interface FavoritesStore {
    favorites: Product[],
    addFavorite: (product: Product) => void,
    removeFavorite: (productId: number) => void,
    isFavorite: (productId: number) => boolean,
    count:()=>number
}

const useFavoritesStore = create<FavoritesStore>((set, get) => ({
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
        return get()
            .favorites.some((product) => product.id === productId)
    },
    count:()=>{
        return get().favorites.length
    }
})
)

export default useFavoritesStore