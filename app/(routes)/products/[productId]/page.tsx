import AddToCart from "@/app/components/AddToCart";
import ShareButton from "@/app/components/ShareButton";
import { Product } from "@/app/types/types";
import { Metadata } from "next";
import Image from "next/image";
import { BsBox2 } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";

type Props = {
    params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { productId } = await params;

    const product: Product = await fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json());

    return {
        title: `${product.title} | Fasco`,
        description: product.description,
        openGraph: {
            title: `${product.title} | Fasco`,
            description: product.description,
            images: [product.image],
        },
    };
}


export default async function ProductPage({ params }: Props) {
    const { productId } = await params;
    const product: Product = await fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json());
    return (<section className="container mx-auto py-20 px-4 lg:px-32 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Image src={product.image} alt={product.title} width={400} height={400} />
            <div className="flex flex-col gap-2">
                <p className="text-base text-[#484848]">{product.category}</p>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="flex justify-start items-center -mt-2 mb-2">{
                    product.rating.rate > 0 && Array(5).fill(0).map((_, i) => Math.round(product.rating.rate) >= i + 1 ? <FaStar key={i} /> : <FaRegStar key={i} />)}
                    <span className="mx-2">({Math.round(product.rating.rate)})</span>
                </div>
                <p className="text-2xl font-bold ">${product.price}</p>
                <p className="text-base text-[#484848]">{product.description}</p>
                <p className="text-base font-bold text-[#484848] mt-10">
                    Only 9 item(s) left in stock!
                </p>
                <progress max={product.rating.count} color="red" value={Math.round(product.rating.count / 9)}
                    className="w-full rounded-full h-2 flex [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full  [&::-webkit-progress-value]:bg-red-600 " />
                <AddToCart product={product} />
                <ShareButton shareLink={`https://fasco-pearl.vercel.app/products/${product.id}`} type="button" className="flex items-center gap-2 cursor-pointer " />
                <hr className="border-gray-200  my-5" />
                <div className="flex gap-2 items-center">
                    <LiaShippingFastSolid size={15} />
                    <h4 className="font-bold">Estimated Delivery:</h4>
                    <p className="text-sm font-extralight">Jul 30 - Aug 03</p>
                </div>

                <div className="flex gap-2 items-center">
                    <BsBox2 size={15} />
                    <h4 className="font-bold">Free Shipping & Returns:</h4>
                    <p className="text-sm font-extralight">On all orders over $75</p>
                </div>
                <div className="mt-5 bg-gray-300 flex flex-col items-center justify-center gap-2 py-4 ">
                    <Image src={"/shipping.png"} alt="Shipping" width={400} height={200} />
                    <p className="font-semibold">Guarantee safe & secure checkout</p>
                </div>
            </div>
        </div>
    </section>)
}
