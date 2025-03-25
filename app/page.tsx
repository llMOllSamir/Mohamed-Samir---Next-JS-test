import { FaAngleRight } from "react-icons/fa";
import { Product } from "./types/types";
import ProductDisplay from "./components/ProductDisplay";
import FilterProducts from "./components/FilterProducts";


export default async function Home({ searchParams }: { searchParams: Promise<{ show: number }> }) {
  const { show } = (await searchParams);
  const res = await fetch('https://fakestoreapi.com/products');
  const data: Product[] = await res.json() || [];

  return (
    <section className="container mx-auto py-20 px-4 lg:px-32 ">
      <h1 className="text-center text-5xl font-bold  mb-3">Fashion</h1>
      <p className="text-center flex  justify-center items-center gap-5 mb-32 text-xs font-light text-[#484848]">Home <FaAngleRight /> Fashion</p>
      <FilterProducts url="/" />
      <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${show ? show == 3 ? "xl:grid-cols-3" : show == 6 ? "xl:grid-cols-6" : "xl:grid-cols-4" : "xl:grid-cols-4"}   gap-10 mt-20  text-center md:text-start`}>
        {
          data.length > 0 && data.slice(0, 12).map((product) => (
            <ProductDisplay key={product.id} product={product} />
          ))
        }
      </div>
    </section>
  );
}
