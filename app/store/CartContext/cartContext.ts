import { Cart, Product } from "@/app/types/types";
import { createContext } from "react";

type CartContext = {
    cart:Cart|null
    checkFoundedCart:()=>void
    addToCart:(product: Product, quantity: number)=>void
    checkOut:()=>void
}
export const cartContext = createContext<CartContext>({
    cart:null,
    checkFoundedCart:()=>{},
    addToCart:()=>{},
    checkOut:()=>{}
})