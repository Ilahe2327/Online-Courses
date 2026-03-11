import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import searchReducer from "./searchSlice"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
         search: searchReducer
    },
})

// TypeScript üçün tip — bunlar əzbər yazılır, mənasını bilmək şərt deyil
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch