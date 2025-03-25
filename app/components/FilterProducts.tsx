"use client"

import { useRouter } from "next/navigation"
import { ComponentProps, useEffect, useState } from "react"


export default function FilterProducts({ url }: { url: string }) {
    const [ItemsDisplay, setItemsDisplay] = useState(4)
    const router = useRouter()
    useEffect(() => {
        if (!url) return
        if (!ItemsDisplay || ItemsDisplay === 4) {
            router.push(`${url}`)
        } else {
            router.push(`${url}/?show=${ItemsDisplay}`)
        }
    }, [ItemsDisplay, url, router])
    return (
        <div className="flex justify-between items-center">
            <select name="filter" id="filter" className="outline-none flex  min-w-36 cursor-pointer ">
                <option className="" value="best">Best Selling</option>
                <option className="" value="new">New Arrivals</option>
                <option className="" value="trending">Trending</option>
            </select>
            <div className="xl:flex gap-4 justify-center items-center hidden">
                <MenuButton onClick={() => { setItemsDisplay(3) }} className="bg-gray-200 flex justify-center items-center gap-0.5 size-8 p-2 rounded cursor-pointer" />
                <MenuButton onClick={() => { setItemsDisplay(4) }} ItemsDisplay={4} className="bg-gray-200 flex justify-center items-center p-2 gap-0.5 size-8 rounded cursor-pointer" />
                <MenuButton onClick={() => { setItemsDisplay(6) }} ItemsDisplay={6} className="bg-gray-200 flex justify-center items-center gap-0.5 size-8 rounded cursor-pointer" />
            </div>
        </div>
    )
}





type ButtonProps = ComponentProps<"button"> & {
    ItemsDisplay?: number
}
function MenuButton({ ItemsDisplay, className, ...rest }: ButtonProps) {

    return (
        <button className={`${className}`}{...rest}>
            {
                new Array(ItemsDisplay || 3).fill(0).map((_, index) =>
                    <span key={index} className="w-0.5 bg-black h-4 "></span>)
            }
        </button>)
}