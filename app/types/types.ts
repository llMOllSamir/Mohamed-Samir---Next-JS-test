export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

type ProductQuantity =Product &{quantity:number}
export type Cart = {
    id:number
    userId:number
    products : ProductQuantity[]
}