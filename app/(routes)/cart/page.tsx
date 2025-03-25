"use client"

import { cartContext } from "@/app/store/CartContext/cartContext"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"
import { FaAngleRight } from "react-icons/fa"


export default function CartDetails() {
    const { addToCart, checkOut, cart } = use(cartContext)


    return (
        <section className="container mx-auto py-20 px-4 lg:px-32 pb-32 select-none ">
            <h1 className="text-center text-5xl font-bold  mb-6">Shopping Cart</h1>
            <p className="text-center flex  justify-center items-center gap-5 mb-32 text-xs font-light text-[#484848]">Home <FaAngleRight /> Your Shopping Cart</p>
            {
                cart && cart.products.length > 0 ? <>
                    <table className="w-full text-start border-spacing-2 border-collapse">
                        <thead className="border-b border-gray-300 ">
                            <tr  >
                                <th className="w-1/3 py-4" >Product</th>
                                <th className="py-4">Price</th>
                                <th className="py-4">Quantity</th>
                                <th className="py-4">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map(product =>
                            (<tr key={product.id} className="border-b border-gray-300" >
                                <td className="text-center py-8 align-top">
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                        <Image src={product.image} alt={product.title} width={200} height={200} className="w-full" />
                                        <div className="flex flex-col h-full items-center md:items-start justify-between gap-3">
                                            <h2>{product.title}</h2>
                                            <button onClick={() => { addToCart(product, 0) }} className="text-[#484848] underline cursor-pointer ">Remove</button>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center py-8 align-top">
                                    <h2> ${product.price}</h2>
                                </td>
                                <td className="text-center py-8 align-top  ">
                                    <div className="flex justify-center items-center gap-4 border rounded w-fit mx-auto border-gray-300 px-2 py-1">
                                        <button className="size-6 text-xl font-bold hover:bg-gray-200 transition cursor-pointer flex justify-center items-center" onClick={() => { addToCart(product, product.quantity - 1) }}>-</button>
                                        <h2 className="font-bold text-[#484848]">{product.quantity}</h2>
                                        <button className="size-6 text-xl font-bold hover:bg-gray-200 transition cursor-pointer flex justify-center items-center" onClick={() => { addToCart(product, product.quantity + 1) }}>+</button>
                                    </div>
                                </td>
                                <td className="text-center py-8 align-top">
                                    ${product.price * product.quantity}
                                </td>
                            </tr>)
                            )
                            }
                        </tbody>
                    </table>
                    <div className="flex flex-col w-3/4 md:w-1/2 xl:w-1/3 gap-4 ms-auto my-4">
                        <div className="text-[#484848]  flex gap-2 items-center  ">
                            <input type="checkbox" className="outline-0 accent-black size-5 " />
                            <p>For <span className="font-bold text-black">$10.00</span> please wrap the product</p>
                        </div>
                        <hr className="border-gray-300 " />
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Subtotal</p>
                            <p className="font-bold">${cart.products.map(item => item.quantity * item.price).reduce((acc, num) => acc + num, 0)}</p>
                        </div>
                        <button onClick={() => { checkOut() }} className="flex justify-center items-center bg-black text-white rounded-lg py-3 cursor-pointer">Check Out</button>
                    </div>

                </> : <div className="flex flex-col gap-4 justify-center items-center">
                    <h2 className="font-bold text-2xl text-[#484848]">There Is No Items In Your Cart</h2>
                    <Link href={"/products"} className="border rounded px-2 py-1 text-sm flex justify-center items-center min-w-32  ">Add Items</Link>
                </div>
            }
        </section>
    )
} 