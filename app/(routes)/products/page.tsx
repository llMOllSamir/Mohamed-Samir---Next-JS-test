import FilterProducts from "@/app/components/FilterProducts";
import ProductDisplay from "@/app/components/ProductDisplay";
import { Product } from "@/app/types/types";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Fasco | Products",
    description: "Fasco is a fashion store You can find all your fashion needs here",
    openGraph: {
        title: "Fasco | Products",
        description: "Fasco is a fashion store You can find all your fashion needs here",
    }
};


export default async function Products({ searchParams }: { searchParams: Promise<{ show: number }> }) {
    const { show } = (await searchParams);
    const res = await fetch('https://fakestoreapi.com/products');
    const data: Product[] = await res.json() || [];

    return (
        <section className="container mx-auto py-20 px-4 lg:px-32 pb-32 ">
            <FilterProducts url="/products" />
            <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${show ? show == 3 ? "xl:grid-cols-3" : show == 6 ? "xl:grid-cols-6" : "xl:grid-cols-4" : "xl:grid-cols-4"}   gap-10 mt-20  text-center md:text-start`}>
                {
                    data.length > 0 && data.map((product) => (
                        <ProductDisplay key={product.id} product={product} />
                    ))
                }
            </div>
        </section>
    )
}