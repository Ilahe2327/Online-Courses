import { Course } from "@/data/courses"
import { courses as defaultCourses } from "@/data/courses"
import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

const writeToStorage = (items: Course[], total: number, purchasedItems: Course[]) => {
    if (typeof window === "undefined") return
    localStorage.setItem("cart_items", JSON.stringify(items))
    localStorage.setItem("cart_total", JSON.stringify(total))
    localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems))
}
const calcTotal = (items: Course[]) => {
    return items.reduce((sum, item) => {
        const price = item.discount
            ? Number(String(item.newPrice).replace(/[^\d.]/g, ""))
            : Number(String(item.price).replace(/[^\d.]/g, ""))
        return sum + price
    }, 0)
}

type CartState = {
    items: Course[]
    totalAmount: number
    hydrated: boolean  // ← localStorage yüklənibmi?
    purchasedItems: Course[]
    courses: Course[]
}

// initialState HƏMİŞƏ boş olmalıdır — server və client eyni başlamalıdır
const initialState: CartState = {
    items: [],
    totalAmount: 0,
    hydrated: false,
    purchasedItems: [],
    courses: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        hydrateCart: (state) => {
            if (typeof window === "undefined") return
            const items = localStorage.getItem("cart_items")
            const total = localStorage.getItem("cart_total")
            const purchasedItems = localStorage.getItem('purchasedItems')
            const courses = localStorage.getItem('courses')
            state.items = items ? JSON.parse(items) : []
            state.totalAmount = total ? JSON.parse(total) : 0
            state.purchasedItems = purchasedItems ? JSON.parse(purchasedItems) : []
            state.hydrated = true
            state.courses = courses ? JSON.parse(courses) : defaultCourses
        },

        addToBasket: (state, action) => {
            const exists = state.items.find(item => item.id === action.payload.id)
            if (!exists) {
                state.items.push(action.payload)
            }
            state.totalAmount = calcTotal(state.items)
            writeToStorage(state.items, state.totalAmount, state.purchasedItems)
        },

        removeFromBasket: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            state.totalAmount = calcTotal(state.items)
            writeToStorage(state.items, state.totalAmount, state.purchasedItems)
        },
        clearBasket: (state) => {
            state.purchasedItems = [...state.purchasedItems, ...state.items]
            state.items = []
            state.totalAmount = 0
            writeToStorage(state.items, state.totalAmount, state.purchasedItems)
        },
        addCourse: (state, action) => {
            state.courses.push(action.payload)
            if (typeof window !== "undefined") {
                localStorage.setItem("courses", JSON.stringify(state.courses))
            }
        }
    },
})

export const { addToBasket, removeFromBasket, hydrateCart, clearBasket, addCourse } = cartSlice.actions
export default cartSlice.reducer