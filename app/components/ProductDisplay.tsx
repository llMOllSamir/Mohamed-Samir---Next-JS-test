import Image from "next/image";
import { Product } from "../types/types";
import Link from "next/link";

export default function ProductDisplay({ product }: { product: Product }) {
    return (
        <div className=" grow hover:shadow-lg transition-all duration-300 px-5 rounded-lg">
            <Link href={`/products/${product.id}`} className="flex flex-col justify-between h-full w-full" >
                <Image src={product.image} alt={product.title} width={300} height={300} className="m-auto" loading="lazy" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold">{product.title.split(" ").slice(0, 3).join(" ")}</h2>
                    <p className="text-gray-600">${product.price}</p>
                </div>
            </Link>
        </div>
    )
}
