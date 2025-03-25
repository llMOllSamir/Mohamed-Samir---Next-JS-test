"use client";

import { FormEvent, use, useState } from "react";
import { Product } from "../types/types";
import { FiMinus, FiPlus } from "react-icons/fi";
import { cartContext } from "../store/CartContext/cartContext";




type Props = {
    product: Product
}

export default function AddToCart({ product }: Props) {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = use(cartContext)
    function updateQuantity(count: number) {
        if (count < 1) return setQuantity(1)
        setQuantity(count)
    }
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        addToCart(product, quantity)
    }
    return (
        <div className="flex w-full justify-between items-center my-16">
            <form onSubmit={onSubmit} className="w-full flex items-end gap-10">
                <div className="min-w-1/4">
                    <label htmlFor="quantity" >Quantity</label>
                    <div className="flex gap-3 mt-4 justify-between items-center h-12 min-w-1/3  border-gray-200 border rounded">
                        <button onClick={() => updateQuantity(quantity - 1)} type="button" className="cursor-pointer size-12 transition-colors duration-300 flex justify-center items-center hover:bg-gray-200 disabled:text-[#484848]" disabled={quantity <= 1}>
                            <FiMinus />
                        </button>
                        <input type="tel" className="w-6 text-center outline-0 border-0" value={quantity} onChange={(e) => { setQuantity(Number(e.target.value) || 1) }} />
                        <button onClick={() => updateQuantity(quantity + 1)} type="button" className="cursor-pointer size-12   transition-colors duration-300 flex justify-center items-center hover:bg-gray-200 disabled:text-[#484848]" >
                            <FiPlus />
                        </button>
                    </div>
                </div>
                <button className="w-full flex items-center transition-colors duration-300 justify-center hover:text-white border-2 rounded cursor-pointer hover:bg-[#484848] h-12">Add To Cart</button>
            </form>
        </div>
    )
}