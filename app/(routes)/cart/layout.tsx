import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Shopping Cart"
}


export default function CartLayout({ children }: { children: ReactNode }) {
    return children
}