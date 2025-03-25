import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-[#DEDFE1] py-10 flex justify-center gap-10 items-center flex-col  lg:px-32 px-4">
            <div className="container mx-auto  flex justify-between items-center  ">
                <h2 className="lg:text-3xl text-4xl md:text-5xl "><Link href={"/"}>FASCO</Link></h2>
                <ul className=" gap-4 lg:gap-14 xl:gap-20 flex justify-center items-center text-[#484848]">
                    <li className="hover:text-black transition-colors cursor-pointer"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-black transition-colors cursor-pointer"><Link href={"/shop"}>Shop</Link></li>
                    <li className="hover:text-black transition-colors cursor-pointer"><Link href={"/Products"}>Products</Link></li>
                    <li className="hover:text-black transition-colors cursor-pointer"><Link href={"/Pages"}>Pages</Link></li>
                </ul>
            </div>
            <p className="text-sm">Copyright © 2022 FASCO . All rights reserved.</p>
        </footer>
    )
}
