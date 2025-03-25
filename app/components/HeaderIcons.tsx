"use client"

import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { FaRegStar, FaRegUser } from "react-icons/fa"
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md"
import { cartContext } from "../store/CartContext/cartContext";


export default function HeaderIcons() {
    const { cart, checkFoundedCart } = use(cartContext)
    const router = useRouter();

    useEffect(() => {
        checkFoundedCart()
    }, [checkFoundedCart])

    return (
        <div className="md:block flex justify-center items-center fixed md:static  bottom-0 w-full md:w-auto shadow-2xl md:shadow-none  bg-white h-16 md:h-auto ">
            <ul className="flex md:gap-6 gap-20  justify-center  items-center w-full px-10 md:px-0 ">
                <li className="hover:text-black transition-colors cursor-pointer"><IoSearch title="Search" size={22} onClick={() => router.push("/search")} /></li>
                <li className="hover:text-black transition-colors cursor-pointer"><FaRegUser title="Setting" size={22} onClick={() => router.push("/setting")} /></li>
                <li className="hover:text-black transition-colors cursor-pointer"> <FaRegStar title="Favorites" size={22} onClick={() => router.push("/wishlist")} /></li>
                <li className="hover:text-black transition-colors relative cursor-pointer">
                    <MdOutlineShoppingBag title="Cart" onClick={() => router.push("/cart")} size={24} />
                    {
                        cart && cart.products.length > 0 &&
                        <div className="size-6 rounded-full bg-red-600 text-white translate-x-3/4 -translate-y-1/2 absolute top-0 right-0 flex justify-center items-center">{cart.products.length}</div>
                    }
                </li>
            </ul>
        </div >
    )
}