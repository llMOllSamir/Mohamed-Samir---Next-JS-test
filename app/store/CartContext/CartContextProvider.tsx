"use client"
import { ReactNode, useCallback, useState } from "react";
import { cartContext } from "./cartContext";
import { Cart, Product } from "@/app/types/types";

type CartProps = {
    children: ReactNode
}
export default function CartContextProvider({ children }: CartProps) {
    const [cart, setCart] = useState<Cart | null>(null)

    const checkFoundedCart = useCallback(() => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart") || "{}"))
        } else {
            setCart(null)
        }
    }, [])

    const addToCart = (product: Product, quantity: number) => {
        if (cart) {
            const cartItems = { ...cart }
            const foundedCartItem = cartItems?.products.find(item => item.id === product.id)
            if (foundedCartItem) {
                if (quantity < 1) {
                    cartItems.products = cartItems.products.filter(pro => pro.id !== product.id)
                } else {
                    foundedCartItem.quantity = quantity
                }
            } else {
                cart.products.push({ ...product, quantity })
            }
            setCart(cartItems)
            localStorage.setItem("cart", JSON.stringify(cartItems))
        } else {
            const initCart = {
                id: 1,
                userId: 1,
                products: [
                    { ...product, quantity }
                ]
            }
            setCart(initCart)
            localStorage.setItem("cart", JSON.stringify(initCart))
        }
    }

    const checkOut = () => {
        setCart(null)
        localStorage.removeItem("cart")
    }

    return (
        <cartContext.Provider value={{ checkFoundedCart, cart, addToCart, checkOut }} >{children}</cartContext.Provider>
    )
}
