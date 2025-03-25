"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

export default function MainNav() {
    const [openMenu, setOpenMenu] = useState(false)
    const pathName = usePathname();
    const links: { path: string, name: string }[] = [
        { path: "/", name: "Home" },
        { path: "/shop", name: "Shop" },
        { path: "/products", name: "Products" },
    ]
    return (
        <nav className="md:block flex">
            <button className="md:hidden cursor-pointer border rounded p-2 bg-[#484848] text-white " onClick={() => setOpenMenu(!openMenu)}>
                <RiMenu3Fill size={28} />
            </button>
            <ul className={`capitalize flex flex-col md:flex-row md:gap-10 gap-4 lg:gap-14 xl:gap-20 fixed md:static ${openMenu ? "top-24" : "-top-full"} transition-all duration-500 shadow py-4 md:shadow-none md:py-0 start-0 end-0 bg-white  font-sans items-center `}>
                {
                    links.map((link) => (
                        <li onClick={() => { setOpenMenu(false) }} key={link.path} className={`hover:text-black hover:md:border-b transition-all ${pathName === link.path ? "md:border-b text-black" : ""}`}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))
                }
                <li className="flex gap-2 hover:text-black transition-colors items-center cursor-pointer">Pages <FaAngleDown /></li>
            </ul>
        </nav>
    )
}
