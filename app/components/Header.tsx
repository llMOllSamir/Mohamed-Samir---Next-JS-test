import Link from "next/link";
import HeaderIcons from "./HeaderIcons";
import MainNav from "./MainNav";

export default function Header() {
    return (
        <header className="container font-normal mx-auto select-none bg-white text-[#484848]  flex justify-between items-center  sticky-top min-h-14 lg:px-32 px-4 ">
            <h2 className="lg:text-[52px] text-4xl md:text-5xl "><Link href={"/"}>FASCO</Link></h2>
            <MainNav />
            <HeaderIcons />
        </header>
    )
}
