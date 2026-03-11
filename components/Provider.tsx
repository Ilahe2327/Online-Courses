'use client'
import { hydrateCart } from '@/redux/cartSlice'
import { store } from '@/redux/store'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from "react-redux"

interface ReduxProvider {
    children: React.ReactNode
}
function CartHydrator({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(hydrateCart())
    }, [])

    return <>{children}</>
}
const ReduxProvider = ({ children }: ReduxProvider) => {
    return (
        <Provider store={store}>
            <CartHydrator>
                {children}
            </CartHydrator>
        </Provider>
    )
}

export default ReduxProvider